import * as POSTPROCESSING from 'postprocessing';
import * as THREE from 'three';
import type * as dat from 'dat.gui';

export const getComposer = (
  renderer : THREE.WebGLRenderer,
  scene : THREE.Scene,
  camera : THREE.Camera,
  focalLength : number,
  gui : dat.GUI
) => {
  const composer = new POSTPROCESSING.EffectComposer( renderer );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const effects : any[] = [];

  composer.addPass(
    new POSTPROCESSING.RenderPass( scene, camera )
  );

  {
    const bloomEffect = new POSTPROCESSING.BloomEffect( {
      luminanceThreshold: 0.82,
      intensity: 1.5,
      kernelSize: POSTPROCESSING.KernelSize.LARGE
    } );
    effects.push( bloomEffect );

    const bloomFolder = gui.addFolder( 'bloom' );
    bloomFolder.add( bloomEffect, 'intensity', 0, 10 );
    bloomFolder.add( bloomEffect.luminanceMaterial, 'threshold', 0, 1.0 );
    bloomFolder.add( bloomEffect.luminanceMaterial, 'smoothing', 0, 0.05 );
  }

  let updateFocusDistance : ( ( distance ?: number ) => void ) | undefined = undefined;
  {
    const depthOfFieldEffect = new POSTPROCESSING.DepthOfFieldEffect(
      camera, {
        focusDistance: 0.0,
        focalLength,
        bokehScale: 4.0,
      }
    );
    effects.push( depthOfFieldEffect );

    const depthOfFieldFolder = gui.addFolder( 'depth of field' );
    depthOfFieldFolder.add( depthOfFieldEffect, 'bokehScale', 0.0, 10.0 );

    const uniforms = depthOfFieldEffect.circleOfConfusionMaterial.uniforms;

    depthOfFieldFolder.add( 
      { focalLength: uniforms.focalLength.value }, 
      'focalLength', 0.0, 1.0, 0.001,
    ).onChange( ( value ) => {
      uniforms.focalLength.value = value;
      depthOfFieldEffect.circleOfConfusionMaterial.uniformsNeedsUpdate = true;
    } );

    const rayCaster = new THREE.Raycaster();
    rayCaster.setFromCamera( 
      new THREE.Vector2( 0, 0 ),
      camera
    );

    updateFocusDistance = ( distance : number | undefined ) => {
      if( !distance ) {
        distance = depthOfFieldEffect.calculateFocusDistance( new THREE.Vector3() ) - 0.01;
      }

      uniforms.focusDistance.value = distance;
      depthOfFieldEffect.circleOfConfusionMaterial.uniformsNeedsUpdate = true;
    };

    depthOfFieldFolder.add( 
      { focusDistance: uniforms.focusDistance.value }, 
      'focusDistance', 0.0, 1.0, 0.001,
    ).onChange( ( value ) => ( updateFocusDistance as ( distance : number ) => void )( value ) );
  }

  {
    const vignetteEffect = new POSTPROCESSING.VignetteEffect( {
      eskil: false,
      offset: 0.5,
      darkness: 0.4
    } );
    effects.push( vignetteEffect );

    const vignetteFolder = gui.addFolder( 'vignette' );
    vignetteFolder.add(
      { offset: vignetteEffect.uniforms.get( 'offset' )!.value },
      'offset', 0.0, 1.0,
    ).onChange( ( value ) => {
      vignetteEffect.uniforms.get( 'offset' )!.value = value;
    } );

    vignetteFolder.add(
      { darkness: vignetteEffect.uniforms.get( 'darkness' )!.value },
      'darkness', 0.0, 1.0,
    ).onChange( ( value ) => {
      vignetteEffect.uniforms.get( 'darkness' )!.value = value;
    } );
  }

  {
    const toneMappingEffect = new POSTPROCESSING.ToneMappingEffect( {
      mode: POSTPROCESSING.ToneMappingMode.REINHARD2,
      maxLuminance: 16.0,
      whitePoint: 1.25,
      middleGrey: 0.5,
      minLuminance: 0.01,
      averageLuminance: 0.25,
      adaptationRate: 1.0
    } );
    effects.push( toneMappingEffect );

    const toneMappingFolder = gui.addFolder( 'toneMapping' );
    toneMappingFolder.add(
      { mode: toneMappingEffect.getMode() }, 'mode', 
      Object.keys( POSTPROCESSING.ToneMappingMode )
    ).onChange( ( value ) => {
      toneMappingEffect.setMode( POSTPROCESSING.ToneMappingMode[ value ] );
    } );

    toneMappingFolder.add(
      { maxLuminance: toneMappingEffect.uniforms.get( 'maxLuminance' )!.value },
      'maxLuminance', 0.0, 32.0,
    ).onChange( ( value ) => {
      toneMappingEffect.uniforms.get( 'maxLuminance' )!.value = value;
    } );

    toneMappingFolder.add(
      { whitePoint: toneMappingEffect.uniforms.get( 'whitePoint' )!.value },
      'whitePoint', 0.0, 3.0,
    ).onChange( ( value ) => {
      toneMappingEffect.uniforms.get( 'whitePoint' )!.value = value;
    } );

    toneMappingFolder.add(
      { middleGrey: toneMappingEffect.uniforms.get( 'middleGrey' )!.value },
      'middleGrey', 0.0, 1.0,
    ).onChange( ( value ) => {
      toneMappingEffect.uniforms.get( 'middleGrey' )!.value = value;
    } );

    toneMappingFolder.add(
      { averageLuminance: toneMappingEffect.uniforms.get( 'averageLuminance' )!.value },
      'averageLuminance', 0.0, 1.0,
    ).onChange( ( value ) => {
      toneMappingEffect.uniforms.get( 'averageLuminance' )!.value = value;
    } );
  }

  {
    const searchImage = new Image();
    searchImage.src = POSTPROCESSING.SMAAEffect.searchImageDataURL;

    const areaImage = new Image();
    areaImage.src = POSTPROCESSING.SMAAEffect.areaImageDataURL;

    // TODO should wait for image load before creating effect
    // https://github.com/vanruesc/postprocessing/wiki/Antialiasing#smaa-lookup-tables
    const smaaEffect = new POSTPROCESSING.SMAAEffect(
      searchImage, areaImage
    );

    effects.push( smaaEffect );
  }

  effects.forEach( effect => composer.addPass( new POSTPROCESSING.EffectPass( camera, effect ) ) );


  const update = () => {
    updateFocusDistance?.();
  };

  return { 
    composer,
    update
  };
};