/* eslint-disable @typescript-eslint/no-explicit-any */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

type ProgressCallback = 
    ( path : string | null, numberOfAssetsLoaded : number, numberOfAssetsToLoad : number ) => void;

type LoadedCallback = () => void;

type LoadMethod = ( path : string ) => any;

type LoadCallback<T> = ( data : T ) => void;

export const dataTextureToEnvironmentMap = ( renderer : THREE.WebGLRenderer, dataTexture : THREE.DataTexture ) => {
  const pmremGenerator = new THREE.PMREMGenerator( renderer );
  pmremGenerator.compileCubemapShader();
  return pmremGenerator.fromEquirectangular( dataTexture ).texture;
};

class AssetHandler {
  loadManager : THREE.LoadingManager;
  textureLoader : THREE.TextureLoader;
  gltfLoader : GLTFLoader;
  rgbeLoader : RGBELoader;
  cache : Map<string, any>;
  toLoad : number;
  loaded : number;
  onProgress : ProgressCallback | null;

  renderer ?: THREE.WebGLRenderer;
  pmremGenerator ?: THREE.PMREMGenerator;

  constructor() {
    this.loadManager = new THREE.LoadingManager();

    this.textureLoader = new THREE.TextureLoader( this.loadManager );
    this.gltfLoader = new GLTFLoader();
    this.rgbeLoader = new RGBELoader();
    this.rgbeLoader.setDataType( THREE.UnsignedByteType );

    // Asset cache
    this.cache = new Map<string, any>();

    // Number of assets left to load
    this.toLoad = 0;

    // Number of assets loaded
    this.loaded = 0;

    // On progress callback
    this.onProgress = null;
  }


  onLoad( onProgress ?: ProgressCallback, onLoad ?: LoadedCallback ) {
    if( onLoad ) this.loadManager.onLoad = onLoad;
    if( onProgress ) this.onProgress = onProgress;

    if( this.toLoad === this.loaded ) {
      onLoad && onLoad();
      onProgress && onProgress( null, 0, 0 );
    }

    return this;
  }

  _loaded<T>( path : string, asset : T ) {
    this.loaded++;
    this.onProgress && this.onProgress( path, this.loaded, this.toLoad );

    // And add the asset to the cache
    this.cache.set( path, asset );
  }

  _load<T>( path : string, method : LoadMethod, callback ?: LoadCallback<T> ) {
    // If asset is already loaded, return cached instance
    if( this.cache.has( path ) ) {
      const data = this.cache.get( path );
      callback?.( data );
      return data;
    }

    // Increment number of assets to load
    this.toLoad++;

    // Otherwise, load asset
    const asset = method( path );

    // And return the final asset
    return asset;
  }

  loadTexture( path : string, useSRGB : boolean, callback ?: LoadCallback<THREE.Texture> ) : THREE.Texture {
    return this._load( path, ( p ) => { 
      const texture = this.textureLoader.load( p, texture => {
        callback?.( texture );
        this._loaded( path, texture );
      } );
      if( useSRGB ) texture.encoding = THREE.sRGBEncoding;
      return texture;
    }, callback );
  }

  /*async loadGLTF(path) {
        return this._load(path, async (p) => {
            const model = await this.gltfLoader.loadAsync(p);

            this._loaded(path);

            return model;
        });
    }*/

  loadHDR( path : string, callback ?: LoadCallback<THREE.DataTexture> ) {
    return this._load( path, p => {
      return this.rgbeLoader.load( p, ( texture ) => {
        callback?.( texture );
        this._loaded( path, texture );
      } );
    }, callback );
  }
}

const ASSETHANDLER = new AssetHandler();

export {
  ASSETHANDLER
};
