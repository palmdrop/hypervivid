/* eslint-disable @typescript-eslint/no-unused-vars */
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
// import { SSAARenderPass } from 'three/examples/jsm/postprocessing/SSAARenderPass';
import { UnrealBloomPass } from '../../effects/unrealBloom/UnrealBloomPass';

import type { VoidCallback } from '../../core';
import { AbstractRenderScene } from '../../AbstractRenderScene';

import { ASSETHANDLER } from '../../systems/AssetHandler';

import { random, randomElement } from '../../../utils/random';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { ShadowTransformShader } from '../../shader/shaders/shadow/ShadowTransformShader';

import t1 from '../../../assets/texture/t1.jpg';
import t2 from '../../../assets/texture/t2.jpg';
import t3 from '../../../assets/texture/t3.jpg';

type ObjectData = {
  object : THREE.Object3D,
  rotationSpeed : THREE.Vector3
};

class BaseRenderer {
  private composer : EffectComposer;
  private transformPass : ShaderPass;

  renderTarget : THREE.WebGLRenderTarget;

  constructor(
    scene : THREE.Scene,
    camera : THREE.Camera,
    renderer : THREE.WebGLRenderer,
    renderTarget ?: THREE.WebGLRenderTarget | undefined | null
  ) {
    if( renderTarget ) {
      this.renderTarget = renderTarget;
    } else {
      this.renderTarget = new THREE.WebGLRenderTarget( 
        renderer.domElement.width, renderer.domElement.height, {
        }
      );
    }

    this.composer = new EffectComposer( renderer, this.renderTarget );

    const renderPass = new RenderPass( scene, camera );
    // const renderPass = new SSAARenderPass( scene, camera, 'black', 0 );

    this.transformPass = new ShaderPass( ShadowTransformShader );
    this.transformPass.uniforms[ 'darkness' ].value = -0.2;
    this.transformPass.uniforms[ 'opacity' ].value = 2.9;
    this.transformPass.uniforms[ 'offset' ].value.set( 0, 0 );
    this.transformPass.uniforms[ 'staticAmount' ].value = 0.07;

    const bloomPass = new UnrealBloomPass( renderer.getSize( new THREE.Vector2() ), 2.0, 0.3, 0.7 );

    this.composer.addPass( renderPass );
    this.composer.addPass( this.transformPass );
    this.composer.addPass( bloomPass );

  }

  render( delta : number, now : number ) {
    this.composer.render( delta );
  }

  setSize( width : number, height : number ) {
    this.composer.setSize( width, height );

    this.transformPass.uniforms[ 'viewport' ].value.set(
      width, height
    );
  }
}

export class RetroCoreRenderScene extends AbstractRenderScene {
  private baseRenderer : BaseRenderer;

  private sceneContent : THREE.Group;
  private lights : THREE.Object3D;

  private materials : THREE.Material[];
  private geometries : THREE.BufferGeometry[];

  private objects : ObjectData[];

  private trueTransparency : boolean;

  private rotationSpeed : number;
  private rotationVelocity : THREE.Vector2;
  private rotationAcceleration : THREE.Vector2;
  private rotationFriction : number;

  constructor( canvas : HTMLCanvasElement, onLoad ?: VoidCallback ) {
    super( canvas, onLoad );

    this.baseRenderer = new BaseRenderer(
      this.scene, this.camera, this.renderer,
    );

    this.sceneContent = new THREE.Group();
    this.lights = new THREE.Group();

    this.materials = [];
    this.geometries = [];
    this.objects = [];

    this.trueTransparency = false;

    this.rotationSpeed = 0.00002;
    this.rotationVelocity = new THREE.Vector2();
    this.rotationAcceleration = new THREE.Vector2();
    this.rotationFriction = 0.15;

    this.populateScene();

    ASSETHANDLER.onLoad( undefined, this.onLoad );
  }

  private createLights() : void {
    for( let i = 0; i < 3; i++ ) {
      const pointLight = new THREE.PointLight( '#ffffff', 10, 0, 2.0 );
      pointLight.position.set( 
        random( -2.0, 2.0 ),
        random( -2.0, 2.0 ),
        random( -2.0, 2.0 ),
      );

      this.lights.add( pointLight );
    }

    const ambientLight = new THREE.AmbientLight( '#ff6daa', 4.0 );

    this.lights.add( ambientLight );
  }

  private createMaterials() : void {
    for( let i = 0; i < 5; i++ ) {
      const color = new THREE.Color().setHSL(
        random( 0.3, 0.4 ) + ( random( 0.0, 1.0 ) > 0.8 ? -0.35 : 0.0 ),
        random( 0.5, 1.0 ),
        random( 0.4, 0.6 ),
      );

      const texture = ASSETHANDLER.loadTexture( 
        randomElement( [ t1, t2, t3 ] ), 
        false 
      );


      const material = new THREE.MeshStandardMaterial( { 
        color: color,
        transparent: this.trueTransparency,
        opacity: random( 0.25, 0.4 ),

        metalness: random( 0, 0.8 ),
        roughness: random( 0.3, 1.0 ),

        bumpMap: texture,
        bumpScale: random( 0.02, 0.1 ),

        alphaMap: texture,

        side: THREE.DoubleSide,

        depthTest: this.trueTransparency,
        depthWrite: this.trueTransparency,
      } );

      this.materials.push( material );
    }
  }

  private createGeometries() : void {
    this.geometries.push(
      new THREE.SphereBufferGeometry( 1.0, 30, 30, 30 ),
      new THREE.TorusBufferGeometry( 1.0, random( 0.03, 0.1 ), 3, 40 ),
      new THREE.DodecahedronBufferGeometry( 0.5, 0.0 )
    );
  }

  private createObject() : THREE.Object3D {
    const geometry = randomElement( this.geometries );
    const material = randomElement( this.materials );

    const mesh = new THREE.Mesh(
      geometry,
      material
    );

    mesh.scale.set( 
      random( 0.1, 2.0 ),
      random( 0.1, 2.0 ),
      random( 0.1, 2.0 ),
    );

    mesh.position.set(
      random( -0.5, 0.5 ),
      random( -0.5, 0.5 ),
      random( -0.5, 0.5 ),
    );

    return mesh;
  }

  private populateScene() : void {
    this.createMaterials();
    this.createGeometries();

    this.camera.position.set(
      0, 0, 4.5 
    );

    this.camera.lookAt( 0, 0, 0 );

    for( let i = 0; i < Math.floor( random( 10, 20 ) ); i++ ) {
      const object = this.createObject();
      this.sceneContent.add(
        object
      );
      this.objects.push( { 
        object,
        rotationSpeed: new THREE.Vector3(
          random( -0.1, 0.1 ),
          random( -0.1, 0.1 ),
          random( -0.1, 0.1 ),
        )
      } );
    }

    const mainObject = new THREE.Mesh(
      this.geometries[ 0 ],
      this.materials[ 0 ],
    );

    mainObject.scale.set( 
      random( 1.8, 2.2 ),
      random( 1.8, 2.2 ),
      random( 1.8, 2.2 ),
    );

    this.objects.push( {
      object: mainObject,
      rotationSpeed: new THREE.Vector3(
        random( -0.1, 0.1 ),
        random( -0.1, 0.1 ),
        random( -0.1, 0.1 ),
      )
    } );

    this.sceneContent.add( mainObject );

    this.scene.add( this.sceneContent );

    this.createLights();
    this.scene.add( this.lights );
  }

  update( delta : number, now : number ) : void {
    this.lights.rotation.x += 0.8 * delta;
    this.lights.rotation.y -= 0.6 * delta;

    for( let i = 0; i < this.objects.length; i++ ) {
      const objectData = this.objects[ i ];
      objectData.object.rotation.x += objectData.rotationSpeed.x * delta;
      objectData.object.rotation.y += objectData.rotationSpeed.y * delta;
      objectData.object.rotation.z += objectData.rotationSpeed.z * delta;
    }

    this.sceneContent.rotation.x += 0.0005;
    this.sceneContent.rotation.y += -0.0002;

    this.sceneContent.rotation.x += this.rotationVelocity.x;
    this.sceneContent.rotation.y += this.rotationVelocity.y;

    this.rotationVelocity.add( this.rotationAcceleration );
    this.rotationAcceleration.multiplyScalar( 1.0 - this.rotationFriction );
    this.rotationVelocity.multiplyScalar( 1.0 - this.rotationFriction );
  }

  render( delta : number, now : number ) {
    this.baseRenderer.render( delta, now );
  }

  resize( width ?: number, height ?: number ) {
    super.resize( width, height );

    this.baseRenderer.setSize( width ?? this.canvas.width, height ?? this.canvas.height );
  }

  onMouseMove( x : number, y : number, deltaX : number, deltaY : number ) {
    this.rotationAcceleration.y += this.rotationSpeed * deltaX;
    this.rotationAcceleration.x += this.rotationSpeed * deltaY;
  }
}