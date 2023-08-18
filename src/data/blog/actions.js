import {createAction} from 'redux-actions';
import {fetchApi} from '../../services/api';
import {SITE_URL} from '../../services/constants';

export const LOAD_BLOG = 'BLOG::LOAD_BLOG';

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
