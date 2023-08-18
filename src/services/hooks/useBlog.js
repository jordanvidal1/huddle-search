import {useDispatch, useSelector} from 'react-redux';
import {constant, prop} from '../../data/fn';
import {loadBlog} from '../../data/blog/actions';

const useBlog = blogIndex => {
  const dispatch = useDispatch();
  const blog = useSelector(prop('blog'));

  const loadBlogResult = blog.get('loadBlogResult');
  const isBlogLoading = loadBlogResult
  .mapPattern('Loading', false, constant(true));

  const blogPosts = loadBlogResult
  .mapPattern('Success', [], ({data}) => data.toJS().posts || []);
  const blogCount = loadBlogResult
  .mapPattern('Success', 0, ({data}) => data.toJS().found || 0);

  return {
    // reducers
    blog,
    loadBlogResult,
    isBlogLoading,

    blogPosts,
    blogCount,

    loadBlog: (dispatch)['∘'](loadBlog),
  };
};

export default useBlog;
