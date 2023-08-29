import {handleActions} from 'redux-actions';
import {Map} from 'immutable';
import {AsyncData} from '../AsyncData';
import {
  CONTACT_US,
  LOAD_BLOG,
  SUBSCRIBE_NEWSLETTER
} from './actions';

const loadBlog = (state, {payload}) => state.set('loadBlogResult', payload);
const subscribeNewsletter = (state, {payload}) => state.set('subscribeNewsletterResult', payload);
const contactUs = (state, {payload}) => state.set('contactUsResult', payload);

const WordPressModel = Map({
  loadBlogResult: AsyncData.Empty(),
  subscribeNewsletterResult: AsyncData.Empty(),
  contactUsResult: AsyncData.Empty()
});

export default handleActions({
  [LOAD_BLOG]: loadBlog,
  [SUBSCRIBE_NEWSLETTER]: subscribeNewsletter,
  [CONTACT_US]: contactUs
}, WordPressModel);
