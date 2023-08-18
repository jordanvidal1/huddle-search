import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {capitalize} from '@material-ui/core'
import useBlog from '../../services/hooks/useBlog';
import Loader from '../shared/Loader';
import Resources from '../shared/Resources';
import Roles from '../shared/Roles';

const Resource = () => {
  const {
    loadBlog,
    blogPosts
  } = useBlog();

  const [blogSlug, setBlogSlug] = useState('/');
  const [blog, setBlog] = useState({});

  const location = useLocation();

  useEffect(() => {
    loadBlog();
  }, []);

  useEffect(() => {
    setBlogSlug(`${location.pathname.split('/')[2]}`);
  }, [location]);

  useEffect(() => {
    const blogPost = blogPosts.find(i => i.slug === blogSlug);
    if (blogPost && blogPost.slug !== blog.slug) {
      setBlog(blogPost);
    }
  }, [blogPosts]);

  const tagsList = Object.keys(blog?.tags || {});

  const loadBlogComponent = () => (
    <div className='resource-content'>
      <div className='title'>
        <h2>
          {blog?.title}
        </h2>
      </div>
      <div className='details'>
        <div className='details-inner'>
          <span>Author</span>
          <span>{`${blog.author?.first_name} ${blog.author?.last_name}`}</span>
        </div>
        <div className='details-inner'>
          <span>Posted</span>
          <span>{new Date(blog?.date).toISOString()}</span>
        </div>
      </div>
      <div className='featured-img'>
        <div className='img-container'>
          <img alt='blog-img' src={blog.featured_image} />
        </div>
        <span>Lorem ipsum dolor</span>
      </div>
      <div
        className='text'
        dangerouslySetInnerHTML={{ __html: blog.excerpt}}
      />
      <div className='tags'>
        {tagsList.map((tag, i) => (
          <div key={i} className='resource-attribute'>
            <span>{capitalize(tag)}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className='resource-page'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            {!blog?.title ? <Loader /> : loadBlogComponent()}
            <Resources />
            <Roles />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resource;
