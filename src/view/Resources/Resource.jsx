import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import cx from 'classnames';
import moment from 'moment';
import {capitalize, Grid} from '@material-ui/core';
import {LEADERS, NAMESPACE} from '../../data/constants';
import useWordPress from '../../services/hooks/useWordPress';
import Loader from '../shared/Loader';
import Resources from '../shared/Resources';
import Roles from '../shared/Roles';
import Share from '../shared/Share';
import Subscribe from '../shared/Subscribe';

import ArrowIcon from '../../static/huddle/arrow.svg';
import PhoneIcon from '../../static/huddle/phone-number.svg';
import EmailIcon from '../../static/huddle/email.svg';
import LinkedInIcon from '../../static/huddle/linkedin-pink.svg';

const Resource = () => {
  const {
    loadBlog,
    blogPosts
  } = useWordPress();

  const [blogSlug, setBlogSlug] = useState('/');
  const [blog, setBlog] = useState({});

  const location = useLocation();

  const {t} = useTranslation(['huddle', 'unitas', 'prime']);

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

  const author = LEADERS[NAMESPACE].find(
    i => i.login === blog.author?.login);

  const renderBlogComponent = () => (
    <div className='resource-content'>
      <Link to='/resources'>
        <img alt='back-arrow' src={ArrowIcon} />
        Back to blog
      </Link>
      <div className='title'>
        <h2 dangerouslySetInnerHTML={{ __html: blog?.title }} />
      </div>
      <div className='resource-details'>
        <div className='resource-details-inner'>
          <span>Author</span>
          <span>{author?.name}</span>
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
      </div>
      <div
        className='text'
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
      <div className={cx('resource-tags', {active: tagsList.length > 0})}>
        {tagsList.map((tag, i) => (
          <div key={i} className='resource-tag'>
            <span>{capitalize(tag)}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderShareComponent = () => (
    <div className='resource-info'>
      <div className='resource-author'>
        <img alt='author-img' src={author?.img} />
        <div className='author-details'>
          <h6>{author?.name}</h6>
          <span>{author?.role}</span>
          <div className='author-contact'>
            {author?.number && (
              <div>
                <img
                  alt='phone-number-icon'
                  src={PhoneIcon}
                />
                <span>{author?.number}</span>
              </div>
            )}
            <div>
              <a href={`mailto:email`}>
                <img
                  alt='email-icon'
                  src={EmailIcon}
                />
                <span>{author?.email}</span>
              </a>
            </div>
            <div>
              <a href={author?.linkedin} rel='noreferrer' target='_blank'>
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
      <Share t={t} />
      <Subscribe t={t} />
    </div>
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
                    <div className='resource-components'>
                      {renderBlogComponent()}
                      {renderShareComponent()}
                    </div>
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
