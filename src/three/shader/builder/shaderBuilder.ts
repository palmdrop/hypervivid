import type { Attributes, GlslFunctions, GlslFunction, GLSL, Imports, Shader, Uniforms, GlslVariable, Constants, GlslVariables } from '../core';
import { arrayToString, variableDefinitionToGLSL, variableValueToGLSL } from './utils';

export type ShaderSourceData = {
  imports : Imports,
  constants ?: Constants,
  globals ?: GlslVariables,
  functions ?: GlslFunctions,
  main : GLSL,
}

const importsToGLSL = ( imports : Imports ) => {
  if( !imports ) return '';
  return arrayToString( imports, chunk => `${ chunk.content }\n` );
};

const constantsToGLSL = ( constants : Constants | undefined ) => {
  if( !constants ) return '';
  return arrayToString( 
    Object.entries( constants ), 
    ( [ name, { type, value } ] ) => `const ${ type } ${ name } = ${ variableValueToGLSL( { type, value } as GlslVariable ) };` 
  );
};

const globalsToGLSL = ( globals : GlslVariables | undefined ) => {
  if( !globals ) return '';
  return arrayToString( 
    Object.entries( globals ), 
    ( [ name, variable ] ) => variableDefinitionToGLSL( name, variable )
  );
};

const uniformsToGLSL = ( uniforms : Uniforms ) => {
  if( !uniforms ) return '';
  return arrayToString( 
    Object.entries( uniforms ), 
    ( [ name, { type } ] ) => `uniform ${ type } ${ name };`   
  );
};

const attributesToGLSL = ( attributes : Attributes ) => {
  if( !attributes ) return '';
  return arrayToString( 
    Object.entries( attributes ), 
    ( [ name, { type } ] ) => `varying ${ type } ${ name };`   
  );
};

const functionToGLSL = ( name : string, glslFunction : GlslFunction ) => {
  return `${ glslFunction.returnType } ${ name }( 
    ${ arrayToString( glslFunction.parameters, ( arg ) => `${ arg[ 0 ] } ${ arg[ 1 ] }`, ',' ) }
  ) {\n
    ${ glslFunction.body }\n
  }\n`;
};

const functionsToGLSL = ( functions : GlslFunctions | undefined ) => {
  if( !functions ) return '';
  return arrayToString( 
    Object.entries( functions ), 
    ( [ name, glslFunction ] ) => functionToGLSL( name, glslFunction ), '\n\n' 
  );
};

export const buildShader = ( 
  attributes : Attributes,
  uniforms : Uniforms,

  vertexSourceData : ShaderSourceData,
  fragmentSourceData : ShaderSourceData
) : Shader => {

  const attributesGLSL = attributesToGLSL( attributes );
  const uniformsGLSL = uniformsToGLSL( uniforms );

  const vertexShader = `
    ${ importsToGLSL( vertexSourceData.imports ) }
    ${ attributesGLSL }
    ${ uniformsGLSL }

    ${ constantsToGLSL( fragmentSourceData.constants ) }

    ${ functionsToGLSL( vertexSourceData.functions ) }

    void main() {
      ${ vertexSourceData.main }
    }
  `;

  const fragmentShader = `
    ${ attributesGLSL }
    ${ uniformsGLSL }

    ${ importsToGLSL( fragmentSourceData.imports ) }

    ${ constantsToGLSL( fragmentSourceData.constants ) }
    ${ globalsToGLSL( fragmentSourceData.globals ) }

    ${ functionsToGLSL( fragmentSourceData.functions ) }

    void main() {
      ${ fragmentSourceData.main }
    }
  `;

  return {
    uniforms,
    vertexShader,
    fragmentShader
  };
};

