import React from 'react';
import cx from 'classnames';
import {Link} from 'react-router-dom';

const filters = [
  {
    name: 'All'
  },
  {
    name: 'Blog'
  },
  {
    name: 'Insights'
  },
  {
    name: 'Case studies'
  }
];

const ResourcesNav = () => {
  const renderResourcesNavList = () => (
    <div className='resources-nav-inner'>
      <div className='resources-nav-title'>
        <span>Resources</span>
      </div>
      <div className='resources-nav-list'>
        {filters.map((filter, i) => (
          <div key={i}>
            <span
              className={cx({active: filter.name === 'All'})}
            >
              {/* todo: temp condition */}
              <Link
                to={filter.path}
                // onClick={hideSidebar}
              >
                {filter.name}
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className='resources-nav'>
      <div className='resources-nav-container'>
        {renderResourcesNavList()}
      </div>
    </div>
  );
}

export default ResourcesNav;
