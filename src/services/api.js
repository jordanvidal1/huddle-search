import fetch from 'node-fetch';

const Buffer = require('buffer/').Buffer;

export const fetchApi = async (
  url,
  method = 'GET',
  body
) => {
  const headers = new Headers();
  headers.set('Authorization', 'Basic ' + Buffer.from(
    window.WP_USER + ":" + window.WP_TOKEN).toString('base64'));

  const options = {
    method,
    headers,
    body
  };

  const request = await fetch(url, options);

  return await request.json();
}
