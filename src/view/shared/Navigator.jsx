import React, {useEffect, useMemo, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import cx from 'classnames';
import {NAMESPACE, SPECIALISMS, SECTORS} from '../../data/constants';
import {isHuddle, groupSpecialisms} from '../../services/helper';
import TopNav from './TopNav';
import ResourcesNav from './ResourcesNav';
import Footer from './Footer';

import Logo from '../../static/huddle/full-logo-dark.svg';
import Menubar from '../../static/huddle/menubar.svg';
import CloseButton from '../../static/huddle/close-button.svg';
import DropdownArrow from '../../static/huddle/header-dropdown-arrow.svg';
import HeaderArrow from '../../static/huddle/header-arrow.svg';

import UnitasLogo from '../../static/unitas/full-logo.svg';
import UnitasMenubar from '../../static/unitas/menubar.svg';
import UnitasDropdownArrow from '../../static/unitas/header-dropdown-arrow.svg';
import UnitasHeaderArrow from '../../static/unitas/header-arrow.svg';
import UnitasCloseButton from '../../static/unitas/close-button.svg';

const routes = [
  {
    name: 'Looking to hire',
    path: '/looking-to-hire'
  },
  {
    name: isHuddle ? 'Looking for a job' : 'Candidates',
    path: isHuddle ? '/looking-for-a-job' : '/candidates'
  },
  {
    name: 'Specialisms',
    subLinks: SPECIALISMS[NAMESPACE]
  },
  {
    name: 'Sectors',
    subLinks: SECTORS[NAMESPACE]
  },
  {
    name: 'About us',
    subLinks: [
      {
        name: 'Leadership team',
        path: '/leadership-team'
      },
      {
        name: 'Our story',
        path: '/our-story'
      },
      {
        name: 'Our process',
        path: '/our-process'
      },
      // {
      //   name: 'Corporate social responsibility'
      // },
      // {
      //   name: 'Diversity, equality & inclusion'
      // },
      {
        name: 'The Prime Group',
        path: 'the-prime-group'
      }
    ]
  }
];

const Navigator = ({
  children
}) => {
  const [expanded, setExpanded] = useState('');
  const [pathname, setPathname] = useState('');
  const [sideMenuDisplayed, setSideMenuDisplayed] = useState(false);
  const [dropdownDisplayed, setDropdownDisplayed] = useState(false);

  const toggleSidebar = () => setSideMenuDisplayed(!sideMenuDisplayed);
  const hideSidebar = () => setSideMenuDisplayed(false);

  const toggleDropdown = () => setDropdownDisplayed(!dropdownDisplayed);
  const hideDropdown = () => setDropdownDisplayed(false);

  const location = useLocation();

  const content = useMemo(() => children, [children]);

  const handleExpandClick = route => setExpanded(route);

  const closeExpandClick = () => setExpanded('');

  useEffect(() => {
    if (pathname !== '' && !location.hash) {
      window.scrollTo(0, 0);
    }
    closeExpandClick();
    hideDropdown();
    setPathname(`/${location.pathname.split('/')[1]}`);
  }, [location, pathname]);

  const renderAboutUsDropdown = route => expanded === route.name && (
    <div className='nav-dropdown'>
      <img
        alt='dropdown-arrow'
        src={isHuddle ? DropdownArrow : UnitasDropdownArrow}
      />
      <div>
        {route.subLinks.map((subLink, i) => (
          <div key={i}>
            <Link to={subLink.path} onClick={hideSidebar}>
              {subLink.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSpecialismDropdown = route => expanded === route.name && (
    <div className={cx('nav-dropdown', route.name.toLowerCase())}>
      <img
        alt='dropdown-arrow'
        src={isHuddle ? DropdownArrow : UnitasDropdownArrow}
      />
      <div className='nav-dropdown-list'>
        {groupSpecialisms(route.subLinks).map((group, i) => (
          <div key={i} className='nav-dropdown-list-group'>
            <h6>{group.alphabet}</h6>
            {group.specialisms.map((subLink, i) => subLink.path ? (
              <Link key={i} to={subLink.path} onClick={hideSidebar}>
                {subLink.name}
              </Link>
            ) : (
              <span>{subLink.name}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  const renderDropdown = route => expanded === 'About us'
    ? renderAboutUsDropdown(route)
    : renderSpecialismDropdown(route);

  const renderNavList = () => (
    <div className='nav-list'>
      {routes.map((route, i) => (
        <div key={i}>
          <div onClick={() => {
            if (route.subLinks) {
              handleExpandClick(expanded === route.name ? '' : route.name)
            }
          }}>
            {route.subLinks ? (
              <span>
                {route.name}
                <img
                  alt='arrow'
                  className='header-arrow'
                  src={isHuddle ? HeaderArrow : UnitasHeaderArrow}
                />
              </span>
            ) : (
              <Link to={route.path} onClick={hideSidebar}>
                {route.name}
              </Link>
            )}
          </div>
          {route.subLinks && renderDropdown(route)}
        </div>
      ))}
    </div>
  );

  const renderHeader = () => (
    <div className='header'>
      <div className='header-container container'>
        <div className='header-inner'>
          <Link to='/'>
            <img alt='logo' className='logo' src={isHuddle ? Logo : UnitasLogo} />
          </Link>
          <div className='header-nav'>
            <div className='header-nav-list'>
              {renderNavList()}
            </div>
            <img
              alt='logo-menubar'
              className='logo-menubar'
              src={isHuddle ? Menubar : UnitasMenubar}
              onClick={toggleSidebar}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderSidebar = () => (
    /**
     * mobile and web should have different behavior
     * in order to make sidebar responsive is added state
     */
    <div
      className={cx('sidebar', {
        'active': sideMenuDisplayed,
      })}
    >
      <div className='sidebar-container'>
        <div className='sidebar-header'>
          <Link to='/' onClick={hideSidebar}>
            <img
              alt='sidebar-logo'
              className='logo'
              src={isHuddle ? Logo : UnitasLogo}
            />
          </Link>
          <img
            alt='close-button'
            onClick={hideSidebar}
            className='close-button'
            src={isHuddle ? CloseButton : UnitasCloseButton}
          />
        </div>
        {renderNavList()}
      </div>
      <div className='sidebar-backdrop' onClick={hideSidebar} />
    </div>
  );

  return (
    <div className={`${NAMESPACE}-site`}>
      {renderSidebar()}
      <TopNav
        dropdownDisplayed={dropdownDisplayed}
        toggleDropdown={toggleDropdown}
        hideDropdown={hideDropdown}
        isHuddle={isHuddle}
      />
      {renderHeader()}
      {pathname.includes('/resources') && <ResourcesNav />}
      <div id='content'>
        {content}
        <Footer
          expanded={expanded}
          expandClick={handleExpandClick}
          toggleSidebar={toggleSidebar}
        />
      </div>
    </div>
  );
}

export default Navigator;
