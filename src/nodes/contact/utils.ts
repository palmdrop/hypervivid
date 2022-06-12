export const sendEmail = (email: string, message: string) => {
  return fetch('/api/email', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      email, 
      message
    })
  });
};
