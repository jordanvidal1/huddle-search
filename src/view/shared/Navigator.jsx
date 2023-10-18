import React, {useEffect, useMemo, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import cx from 'classnames';
import {NAMESPACE, SPECIALISMS, SECTORS, huddleHref, unitasHref, spectrumHref} from '../../data/constants';
import {isHuddle, isPrime, groupSpecialisms} from '../../services/helper';
import TopNav from './TopNav';
import ResourcesNav from './ResourcesNav';
import Footer from './Footer';

import HuddleLogo from '../../static/huddle/full-logo-dark.svg';
import HuddleMenubar from '../../static/huddle/menubar.svg';
import HuddleCloseButton from '../../static/huddle/close-button.svg';
import HuddleDropdownArrow from '../../static/huddle/header-dropdown-arrow.svg';
import HuddleHeaderArrow from '../../static/huddle/header-arrow.svg';

import UnitasLogo from '../../static/unitas/full-logo.svg';
import UnitasMenubar from '../../static/unitas/menubar.svg';
import UnitasDropdownArrow from '../../static/unitas/header-dropdown-arrow.svg';
import UnitasHeaderArrow from '../../static/unitas/header-arrow.svg';
import UnitasCloseButton from '../../static/unitas/close-button.svg';

import PrimeLogo from '../../static/prime/full-logo.svg';
import PrimeMenubar from '../../static/huddle/menubar.svg';
import PrimeDropdownArrow from '../../static/prime/header-dropdown-arrow.svg';
import PrimeHeaderArrow from '../../static/prime/header-arrow.svg';
import PrimeCloseButton from '../../static/huddle/close-button.svg';

const icons = {
  huddle: {
    logo: HuddleLogo,
    menubar: HuddleMenubar,
    closeButton: HuddleCloseButton,
    dropdownArrow: HuddleDropdownArrow,
    headerArrow: HuddleHeaderArrow
  },
  unitas: {
    logo: UnitasLogo,
    menubar: UnitasMenubar,
    closeButton: UnitasCloseButton,
    dropdownArrow: UnitasDropdownArrow,
    headerArrow: UnitasHeaderArrow
  },
  prime: {
    logo: PrimeLogo,
    menubar: PrimeMenubar,
    closeButton: PrimeCloseButton,
    dropdownArrow: PrimeDropdownArrow,
    headerArrow: PrimeHeaderArrow
  },
}

const defaultRoutes = [
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
      {
        name: 'Corporate social responsibility',
        path: '/corporate-social-responsibility'
      },
      {
        name: 'Diversity, equality & inclusion',
        path: '/diversity-equality-and-inclusion'
      },
      {
        name: 'The Prime Group',
        path: '/the-prime-group'
      }
    ]
  }
];

const primeRoutes = [
  {
    name: 'Companies',
    subLinks: [
      {
        name: 'Huddle',
        path: huddleHref,
        external: true
      },
      {
        name: 'Unitas',
        path: unitasHref,
        external: true
      },
      {
        name: 'Spectrum',
        path: spectrumHref,
        external: true
      }
    ]
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
      }
    ]
  },
  {
    name: 'Blog',
    path: '/blog'
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

const routes = {
  huddle: defaultRoutes,
  unitas: defaultRoutes,
  prime: primeRoutes
};

const groupedDropdowns = ['sectors', 'specialisms'];

const LinkHref = props => (
  <a {...props} target='_blank' rel='noreferrer'>
    {props.children}
  </a>
);

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

  const renderNormalDropdown = route => expanded === route.name && (
    <div className='nav-dropdown'>
      <img
        alt='dropdown-arrow'
        src={icons[NAMESPACE].dropdownArrow}
      />
      <div>
        {route.subLinks.map((subLink, i) => (
          <div key={i}>
            <span>
              {subLink.external ? (
                <LinkHref href={subLink.path}>
                  {subLink.name}
                </LinkHref>
              ) : (
                <Link to={subLink.path} onClick={hideSidebar}>
                  {subLink.name}
                </Link>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSpecialismDropdown = route => expanded === route.name && (
    <div className={cx('nav-dropdown', route.name.toLowerCase())}>
      <img
        alt='dropdown-arrow'
        src={icons[NAMESPACE].dropdownArrow}
      />
      <div className='nav-dropdown-list'>
        {groupSpecialisms(route.subLinks).map((group, i) => (
          <div key={i} className='nav-dropdown-list-group'>
            <h6>{group.alphabet}</h6>
            {group.specialisms.map((subLink, i) => subLink.path ? (
              <span>
                <Link key={i} to={subLink.path} onClick={hideSidebar}>
                  {subLink.name}
                </Link>
              </span>
            ) : (
              <span>{subLink.name}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  const renderDropdown = route => groupedDropdowns.indexOf(expanded) > -1
    ? renderSpecialismDropdown(route)
    : renderNormalDropdown(route);

  const renderNavList = () => (
    <div className='nav-list'>
      {routes[NAMESPACE].map((route, i) => (
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
                  src={icons[NAMESPACE].headerArrow}
                />
              </span>
            ) : (
              <span>
                <Link to={route.path} onClick={hideSidebar}>
                  {route.name}
                </Link>
              </span>
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
            <img alt='logo' className='logo' src={icons[NAMESPACE].logo} />
          </Link>
          <div className='header-nav'>
            <div className='header-nav-list'>
              {renderNavList()}
            </div>
            <img
              alt='logo-menubar'
              className='logo-menubar'
              src={icons[NAMESPACE].menubar}
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
              src={icons[NAMESPACE].logo}
            />
          </Link>
          <img
            alt='close-button'
            onClick={hideSidebar}
            className='close-button'
            src={icons[NAMESPACE].closeButton}
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
      {!isPrime && (
        <TopNav
          dropdownDisplayed={dropdownDisplayed}
          toggleDropdown={toggleDropdown}
          hideDropdown={hideDropdown}
          isHuddle={isHuddle}
        />
      )}
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
