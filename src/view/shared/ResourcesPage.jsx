import React from 'react';
import Resources from './Resources';

const ResourcesPage = props => {
  const {name} = props;

  return (
    <div className='related-resources'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <Resources name={name} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourcesPage;
