export const onRequestGet = async ( context ) => {
  const {
    // request,
    env,
  } = context;
  
  const downloadLink = await env.ARTIFACTS.get( 'DOWNLOAD_LINK' );

  let result;

  try {
    result = await fetch(downloadLink, {
      method: 'GET',
      headers: {
        'content-type': 'text/plain;charset=UTF-8'
      }
    });

    if(result.ok) {
      const data = await result.text();

      return new Response(
        data,
        { status: 200 }
      );
    } else {
      throw new Error();
    }
  } catch ( error ) {
    result = error;

    return new Response(
      undefined,
      { 
        status: 500,
        error: JSON.stringify(error)
      }
    )
  }
};