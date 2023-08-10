import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import cx from 'classnames';
import Dropdown from '../../static/dropdown-arrow.svg';

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
  const [dropdownDisplayed, setDropdownDisplayed] = useState(false);

  const toggleDropdown = () => setDropdownDisplayed(!dropdownDisplayed);
  const hideDropdown = () => setDropdownDisplayed(false);

  const renderTopNavList = () => (
    <>
      <div className='top-nav-left'>
        {leftRoutes.map((route, i) => (
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
        ))}
      </div>
      <div className='top-nav-right'>
        {rightRoutes.map((route, i) => (
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
            <p>
              Quicklinks
            </p>
            <img
              alt='quicklinks-menubar'
              className='quicklinks-button'
              src={Dropdown}
            />
          </div>
        </div>
      </div>
      {renderDropdown()}
    </div>
  );
}

export default TopNav;
