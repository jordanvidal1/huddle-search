import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom'
import {capitalize, Grid} from '@material-ui/core';
import moment from 'moment';
import useBlog from '../../services/hooks/useBlog';
import Loader from '../shared/Loader';
import Resources from '../shared/Resources';
import Roles from '../shared/Roles';

import PhoneIcon from '../../static/huddle/phone-number.svg';
import EmailIcon from '../../static/huddle/email.svg';
import LinkedInIcon from '../../static/huddle/linkedin-pink.svg';

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
  const relatedResources = blogPosts.filter(i => i.slug !== blogSlug);

  const renderBlogComponent = () => (
    <Grid item xs={8} className='resource-content'>
      <div className='title'>
        <h2>
          {blog?.title}
        </h2>
      </div>
      <div className='resource-details'>
        <div className='resource-details-inner'>
          <span>Author</span>
          <span>{`${blog.author?.first_name} ${blog.author?.last_name}`}</span>
        </div>
        <div className='resource-details-inner'>
          <span>Posted</span>
          <span>{moment(blog?.date).format('Do MMMM YYYY')}</span>
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
      <div className='resource-tags'>
        {tagsList.map((tag, i) => (
          <div key={i} className='resource-tag'>
            <span>{capitalize(tag)}</span>
          </div>
        ))}
      </div>
    </Grid>
  );

  const renderShareComponent = () => (
    <Grid item xs={4} className='resource-info'>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className='resource-author'>
            <img alt='author-img' />
            <div className='author-details'>
              <h6>Author name</h6>
              <span>Role</span>
              <div className='author-contact'>
                <div>
                  <img
                    alt='phone-number-icon'
                    src={PhoneIcon}
                  />
                  <span>number</span>
                </div>
                <div>
                  <a href={`mailto:email`}>
                    <img
                      alt='email-icon'
                      src={EmailIcon}
                    />
                    <span>email</span>
                  </a>
                </div>
                <div>
                  <a /* href={linkedin} */ rel='noreferrer' target='_blank'>
                    <img
                      alt='linkedin-icon'
                      src={LinkedInIcon}
                    />
                    <span>LinkedIn profile</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className='resource-share'>
            <div className='share-text'>
              <h5>Share article</h5>
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className='resource-share'>
            <div className='share-text'>
              <h5>Receive email alerts</h5>
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <div className='resource-page'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {!blog?.title
                  ? <Loader />
                  : (
                    <Grid container spacing={3}>
                      {renderBlogComponent()}
                      {renderShareComponent()}
                    </Grid>
                  )}
              </Grid>
              {relatedResources?.length > 0 && (
                <Grid item xs={12}>
                  <Resources
                    resources={relatedResources}
                  />
                </Grid>
              )}
              <Grid item xs={12}>
                <Roles />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resource;
