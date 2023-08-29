import {createAction} from 'redux-actions';
import {fetchApi} from '../../services/api';
import {CONTACT_FORM_ID, SITE_URL, SUBSCRIBE_FORM_ID} from '../constants';

const Buffer = require('buffer/').Buffer;

export const LOAD_BLOG = 'WP::LOAD_BLOG';
export const SUBSCRIBE_NEWSLETTER = 'WP::SUBSCRIBE_NEWSLETTER';
export const CONTACT_US = 'WP::CONTACT_US';

const loadBlogRoot = fetch => () => {
  const runAsync = async () => {
    return await fetch(
      `https://public-api.wordpress.com/rest/v1.1/sites/${SITE_URL}/posts`
    );
  };

  return createAction(
    LOAD_BLOG
  )({async: runAsync()});
};

export const loadBlog = loadBlogRoot(fetchApi);

const subscribeNewsletterRoot = fetch => data => {
  const formData = new FormData();
  formData.append(
    'your-subject',
    'Subscribe'
  );

  for (const key in data) {
    formData.append(`your-${key}`, data[key]);
  }

  const headers = new Headers();
  headers.set('Authorization', 'Basic '
    + Buffer.from(
      process.env.REACT_APP_WP_USER
      + ":"
      + process.env.REACT_APP_WP_TOKEN
    ).toString('base64'));

  const runAsync = async () => {
    return await fetch(
      `https://${SITE_URL}/index.php/wp-json/contact-form-7/v1/contact-forms/${SUBSCRIBE_FORM_ID}/feedback`,
      'POST',
      formData,
      headers
    );
  }

  return createAction(
    SUBSCRIBE_NEWSLETTER
  )({async: runAsync()});
}

export const subscribeNewsletter = subscribeNewsletterRoot(fetchApi);

const contactUsRoot = fetch => data => {
  const formData = new FormData();
  formData.append(
    'your-subject',
    'Contact us'
  );
  formData.append(
    'your-name',
    `${data.firstName} ${data.lastName}`
  );

  for (const key in data) {
    formData.append(
      key.indexOf('checkbox') < 0 ? `your-${key}` : key, data[key]
    );
  }

  const headers = new Headers();
  headers.set('Authorization', 'Basic '
    + Buffer.from(
      process.env.REACT_APP_WP_USER
      + ":"
      + process.env.REACT_APP_WP_TOKEN
    ).toString('base64'));

  const runAsync = async () => {
    return await fetch(
      `https://${SITE_URL}/index.php/wp-json/contact-form-7/v1/contact-forms/${CONTACT_FORM_ID}/feedback`,
      'POST',
      formData,
      headers
    );
  }

  return createAction(
    CONTACT_US
  )({async: runAsync()});
}

export const contactUs = contactUsRoot(fetchApi);
