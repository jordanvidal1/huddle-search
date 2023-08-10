import React from 'react';
import cx from 'classnames';
import {Grid} from '@material-ui/core';

const Resource = props => {
  const {type, title, attributes} = props;

  const classNames = cx('resource-type', {
    ['blog']: type === 'Blog',
    ['insight']: type === 'Insight',
    ['case-study']: type === 'Case Study',
  });

  return (
    <Grid item xs={12} sm={6} md={3} className='resource-grid-item'>
      <div className='resource'>
        <div className='resource-container'>
          <div className='resource-type-container'>
            <div className={classNames}>
              <span>
                {type}
              </span>
            </div>
          </div>
          <div className='resource-title'>
            <h6>
              {title}
            </h6>
          </div>
          <div className='resource-attributes'>
            {attributes.map((attribute) => (
              <div className='resource-attribute'>
                {attribute}
              </div>
            ))}
          </div>
          <div className='resource-description'>
            <p>
              Lorem ipsum dolor sit amet consectetur. Morbi curs usamet habit asse nisl est rhoncus.
            </p>
          </div>
          <div className='btn-container'>
            <button className='btn btn-primary'>
              Read more
            </button>
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default Resource;

Resource.defaultProps = {
  type: 'Blog',
  title: 'Lorem ipsum dolor sit amet consectetur',
  attributes: [
    'How-to', 'Award'
  ]
};
