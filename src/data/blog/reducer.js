import {handleActions} from 'redux-actions';
import {Map} from 'immutable';
import {AsyncData} from '../AsyncData';
import {
  LOAD_BLOG
} from './actions';

const loadBlog = (state, {payload}) => state.set('loadBlogResult', payload);

const BlogModel = Map({
  loadBlogResult: AsyncData.Empty(),
});

export default handleActions({
  [LOAD_BLOG]: loadBlog,
}, BlogModel);
