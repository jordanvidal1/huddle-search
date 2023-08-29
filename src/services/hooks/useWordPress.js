import {useDispatch, useSelector} from 'react-redux';
import {constant, prop} from '../../data/fn';
import {
  contactUs,
  loadBlog,
  subscribeNewsletter
} from '../../data/wordpress/actions';

const useWordPress = () => {
  const dispatch = useDispatch();
  const wordpress = useSelector(prop('wordpress'));

  const loadBlogResult = wordpress.get('loadBlogResult');
  const isBlogLoading = loadBlogResult
    .mapPattern('Loading', false, constant(true));

  const blogPosts = loadBlogResult
    .mapPattern('Success', [], ({data}) => data.toJS().posts || []);
  const blogCount = loadBlogResult
    .mapPattern('Success', 0, ({data}) => data.toJS().found || 0);

  const subscribeNewsletterResult = wordpress.get('subscribeNewsletterResult');
  const isSubscribeLoading = subscribeNewsletterResult
    .mapPattern('Loading', false, constant(true));

  const contactUsResult = wordpress.get('contactUsResult');
  const isContactUsLoading = contactUsResult
    .mapPattern('Loading', false, constant(true));

  return {
    // reducers
    wordpress,
    loadBlogResult,
    isBlogLoading,
    blogPosts,
    blogCount,

    subscribeNewsletterResult,
    isSubscribeLoading,

    contactUsResult,
    isContactUsLoading,

    loadBlog: (dispatch)['∘'](loadBlog),
    subscribeNewsletter: (dispatch)['∘'](subscribeNewsletter),
    contactUs: (dispatch)['∘'](contactUs)
  };
};

export default useWordPress;
