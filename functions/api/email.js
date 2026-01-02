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
  const ADDITIONAL_EMAILS = (await env.RESEND.get('ADDITIONAL_EMAILS') ?? "").split(',');
  const RESEND_API_URL = `https://api.resend.com/emails`;

  console.log( { RESEND_API_KEY });

  const result = await fetch( RESEND_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ RESEND_API_KEY }`
    },
    body: JSON.stringify({
      from: 'Contact <contact@palmdrop.site>',
      to: ["contact@palmdrop.site", ...ADDITIONAL_EMAILS],
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