import React, {useEffect, useMemo, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import cx from 'classnames';

import TopNav from './TopNav';
import ResourcesNav from './ResourcesNav';
import Footer from './Footer';

import Logo from '../../static/full-logo-dark.svg';
import Menubar from '../../static/menubar.svg';
import DropdownArrow from '../../static/dropdown-arrow.svg';
import HeaderArrow from '../../static/header-arrow.svg';

const routes = [
  {
    name: 'Looking To Hire',
    path: '/looking-to-hire'
  },
  {
    name: 'Looking for a job',
    path: '/looking-for-a-job'
  },
  {
    name: 'Specialisms',
    path: '/specialisms'
    // subLinks: []
  },
  {
    name: 'Sectors',
    // subLinks: []
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
      {
        name: 'Corporate social responsibility'
      },
      {
        name: 'Diversity, equality & inclusion'
      },
      {
        name: 'The Prime Group'
      }
    ]
  }
];

const Navigator = ({
  children
}) => {
  const [expanded, setExpanded] = useState(false);
  const [pathname, setPathname] = useState('/');
  const [sideMenuDisplayed, setSideMenuDisplayed] = useState(false);

  // const {isSizeDown: isSmallScreenDevice} = useScreenSize('md');

  const toggleSideBar = () => setSideMenuDisplayed(!sideMenuDisplayed);
  const hideSidebar = () => setSideMenuDisplayed(false);

  const location = useLocation();

  // const content = useMemo(() => children, []);

  const handleExpandClick = () => setExpanded(!expanded);
  const closeExpandClick = () => setExpanded(false);

  useEffect(() => {
    closeExpandClick();
    setPathname(`/${location.pathname.split('/')[1]}`);
    window.scrollTo(0, 0);
  }, [location]);

  const renderDropdown = subLinks => expanded && (
    <div className='nav-dropdown'>
      <img alt='dropdown-arrow' src={DropdownArrow} />
      <div>
        {subLinks.map((subLink, i) => (
          <div key={i}>
            <Link to={subLink.path} onClick={hideSidebar}>
              {subLink.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

  const renderNavList = () => (
    <div className='nav-list'>
      {routes.map((route, i) => (
        <div key={i}>
          <span
            onClick={route.subLinks && handleExpandClick}
          >
            {route.subLinks ? (
              <a>
                {route.name}
                <img alt='arrow' src={HeaderArrow} />
              </a>
            ) : (
              <Link to={route.path}>
                {route.name}
              </Link>
            )}
          </span>
          {route.subLinks && renderDropdown(route.subLinks)}
        </div>
      ))}
    </div>
  );

  const renderHeader = () => (
    <div className='header'>
      <div className='header-container container'>
        <div className='header-inner'>
          <Link to='/' onClick={expanded && handleExpandClick}>
            <img alt='logo' className='logo' src={Logo} />
          </Link>
          <div className='header-nav'>
            <div className='header-nav-list'>
              {renderNavList()}
            </div>
            <img
              alt='logo-menubar'
              className='logo-menubar'
              src={Menubar}
              onClick={toggleSideBar}
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
        active: sideMenuDisplayed,
        passive: !sideMenuDisplayed
      })}
      // style={{height: innerHeight}}
    >
      <div>
        <img
          alt='sidebar-logo'
          className='logo'
          src={Logo}
        />
        <img
          alt='close-button'
          onClick={hideSidebar}
          className='close-button'
          // src={CloseButton}
        />
      </div>
      {renderNavList()}
    </div>
  );

  return (
    <>
      {/*{renderSidebar()}*/}
      {pathname !== '/' ? (
        <>
          <TopNav />
          {renderHeader()}
          {pathname.includes('/resources') && <ResourcesNav />}
        </>
      ) : (
        renderHeader()
      )}
      <div id='content'>
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Navigator;
