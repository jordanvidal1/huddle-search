import React from 'react';
import {Link} from 'react-router-dom';

const leftRoutes = [
  {
    name: 'Executive Search',
    path: '/executive-search'
  },
  {
    name: 'Embedded Talent',
    path: '/embedded-talent-solutions'
  },
  {
    name: 'Contract/Interim',
    path: '/contract-interim'
  }
];

const rightRoutes = [
  {
    name: 'Resources',
    path: '/resources'
  },
  {
    name: 'Work for us',
    path: '/work-for-us'
  },
  {
    name: 'Contact us',
    path: '/contact-us'
  }
];

const TopNav = () => {
  const renderTopNavList = () => (
    <>
      <div className='top-nav-left'>
        {leftRoutes.map((route, i) => (
          <div key={i}>
            <span>
              <Link
                to={route.path}
                // onClick={hideSidebar}
              >
                {route.name}
              </Link>
            </span>
          </div>
        ))}
      </div>
      <div className='top-nav-right'>
        {rightRoutes.map((route, i) => (
          <div key={i}>
            <span>
              <Link
                to={route.path}
                // onClick={hideSidebar}
              >
                {route.name}
              </Link>
            </span>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className='top-nav'>
      <div className='top-nav-inner container'>
        {renderTopNavList()}
      </div>
    </div>
  );
}

export default TopNav;
