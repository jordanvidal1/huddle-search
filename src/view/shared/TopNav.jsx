import React from 'react';
import {Link} from 'react-router-dom';
import cx from 'classnames';

import {ReactComponent as Chevron} from '../../static/icons/chevron.svg';

const leftRoutes = [
  {
    name: 'Permanent Hires',
    path: '/permanent-hires'
  },
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

const TopNav = ({
  dropdownDisplayed,
  toggleDropdown,
  hideDropdown
}) => {
  const renderTopNavList = () => (
    <>
      <div className='top-nav-left'>
        {leftRoutes.map((route, i) => (
          <>
            <div key={i}>
              <span>
                <Link
                  to={route.path}
                  onClick={hideDropdown}
                >
                  {route.name}
                </Link>
              </span>
            </div>
            {i + 1 < leftRoutes.length && <div className='divider' />}
          </>
        ))}
      </div>
      <div className='top-nav-right'>
        {rightRoutes.map((route, i) => (
          <>
            <div key={i}>
              <span>
                <Link
                  to={route.path}
                  onClick={hideDropdown}
                >
                  {route.name}
                </Link>
              </span>
            </div>
            {i + 1 < rightRoutes.length && <div className='divider' />}
          </>
        ))}
      </div>
    </>
  );

  const renderDropdown = () => (
    /**
     * mobile and web should have different behavior
     * in order to make sidebar responsive is added state
     */
    <div
      className={cx('dropdown', {
        'active': dropdownDisplayed,
      })}
    >
      <div className='dropdown-container'>
        {renderTopNavList()}
      </div>
    </div>
  );

  return (
    <div className='top-nav'>
      <div className='top-nav-container container'>
        <div className='top-nav-inner'>
          <div className='top-nav-list'>
            {renderTopNavList()}
          </div>
          <div
            className='top-nav-quicklinks'
            onClick={toggleDropdown}
          >
            <span>
              Quicklinks
            </span>
            <Chevron />
          </div>
        </div>
      </div>
      {renderDropdown()}
    </div>
  );
}

export default TopNav;
