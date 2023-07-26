import React from 'react';
import cx from 'classnames';
import {Link} from 'react-router-dom';

import './styles.scss';

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

const RoleNav = () => {
  const renderRoleNavList = () => (
    <div className='role-nav-inner'>
      <div className='role-nav-title'>
        <span>Resources</span>
      </div>
      <div className='role-nav-list'>
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
    <div className='role-nav'>
      <div className='role-nav-container'>
        {renderRoleNavList()}
      </div>
    </div>
  );
}

export default RoleNav;
