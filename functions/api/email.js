export const onRequestPost = async ( context ) => {
  const {
    request,
    env,
  } = context;

  const { 
    email,
    message
  } = await request.json();
  
  const userID = await env.EMAILJS.get( 'USER_ID' );
  const templateID = await env.EMAILJS.get( 'TEMPLATE_ID' );
  const serviceID = await env.EMAILJS.get( 'SERVICE_ID' );
  const accessToken = await env.EMAILJS.get( 'ACCESS_TOKEN' );

  const data = {
    service_id: serviceID,
    template_id: templateID,
    user_id: userID,
    accessToken,
    template_params: {
      'user_email': email,
      'message': message
    }
  };

  let result;

  try {
    result = await fetch( 'https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      body: JSON.stringify( data ),
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
    } );
  } catch ( error ) {
    result = error;
  }

  return new Response( 
    JSON.stringify( result.status ),
    null,
    2
  );
};