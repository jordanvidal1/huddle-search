import React from 'react';
import {Link} from 'react-router-dom';
import {capitalize, Grid} from '@material-ui/core';
import cx from 'classnames';
import {isPrime} from '../../services/helper';

const Resource = props => {
  const {
    i,
    categories,
    excerpt,
    featured_image,
    tags,
    title,
    slug
  } = props;

  const category = Object.keys(categories)[0];
  const tagsList = Object.keys(tags);

  const classNames = cx('resource-type', {
    blog: category === 'Blog',
    insight: category === 'Insight',
    'case-study': category === 'Case Study'
  });

  return (
    <Grid key={i} item xs={12} sm={6} md={3} className='resource-grid-item'>
      <div className='resource'>
        <div className='resource-container'>
          <div className='resource-type-container'>
            <img alt='blog-img' src={featured_image} />
            <div>
              {!isPrime && (
                <div className={classNames}>
                  <span>
                    {category}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className='resource-title'>
            <h6 dangerouslySetInnerHTML={{ __html: title }}/>
          </div>
          <div className={cx('resource-tags', {active: tagsList.length > 0})}>
            {tagsList.map((tag, i) => (
              <div key={i} className='resource-tag'>
                <span>{capitalize(tag)}</span>
              </div>
            ))}
          </div>
          <div
            className='resource-description'
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          <div className='btn-container'>
            <Link
              to={`/${isPrime ? 'blog' : 'resources'}/${slug}`}
              className='btn btn-primary'
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default Resource;
