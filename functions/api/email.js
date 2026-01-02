export const onRequestPost = async ( context ) => {
  const {
    request,
    env,
  } = context;

  const { 
    email,
    message
  } = await request.json();

  const RESEND_API_KEY = await env.RESEND.get('API_KEY');
  const SEND_TO = (await env.RESEND.get('SEND_TO')).split(',');
  const RESEND_API_URL = `https://api.resend.com/emails`;

  const result = await fetch( RESEND_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ RESEND_API_KEY }`
    },
    body: JSON.stringify({
      from: 'Contact <contact@palmdrop.site>',
      to: SEND_TO,
      subject: `Message from "${email}"`,
      text: message
    })
  });

  return new Response( 
    JSON.stringify(result.status),
    null,
    2
  );
};