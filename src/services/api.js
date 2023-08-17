import fetch from 'node-fetch';

const Buffer = require('buffer/').Buffer;

export const fetchApi = async (
  url,
  method = 'GET',
  body
) => {
  const headers = new Headers();
  headers.set('Authorization', 'Basic '
    + Buffer.from(
    process.env.REACT_APP_WP_USER
    + ":"
    + process.env.REACT_APP_WP_TOKEN
  ).toString('base64'));

  const options = {
    method,
    headers,
    body
  };

  const request = await fetch(url, options);

  return await request.json();
}
