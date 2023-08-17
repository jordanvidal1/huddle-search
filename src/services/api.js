import fetch from 'node-fetch';

export const fetchApi = async (
  url,
  method = 'GET',
  body,
  headers = new Headers()
) => {
  const options = {
    method,
    headers,
    body
  };

  const request = await fetch(url, options);

  return await request.json();
}
