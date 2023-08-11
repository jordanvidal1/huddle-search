import fetch from 'node-fetch';

const Buffer = require('buffer/').Buffer;

export const fetchApi = async (
  url,
  method = 'GET',
  body
) => {
  const headers = new Headers();
  headers.set('Authorization', 'Basic ' + Buffer.from('admin' + ":" + 'm4IQ Y6hk BsDw muri 2QHg 1MaV').toString('base64'));
  // todo: use auth from .env

  const options = {
    method,
    headers,
    body
  };

  const request = await fetch(url, options);

  return await request.json();
}
