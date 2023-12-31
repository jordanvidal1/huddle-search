import React, {useEffect, useMemo, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import cx from 'classnames';
import {NAMESPACE, SPECIALISMS, SECTORS} from '../../data/constants';
import {groupSpecialisms, isHuddle, isPrime} from '../../services/helper';
import TopNav from './TopNav';
import ResourcesNav from './ResourcesNav';
import Footer from './Footer';

import HuddleLogo from '../../static/huddle/full-logo-dark.svg';
import UnitasLogo from '../../static/unitas/full-logo.svg';
import PrimeLogo from '../../static/prime/full-logo.svg';
import HuddleDropdownArrow from '../../static/huddle/header-dropdown-arrow.svg';
import UnitasDropdownArrow from '../../static/unitas/header-dropdown-arrow.svg';
import PrimeDropdownArrow from '../../static/prime/header-dropdown-arrow.svg';

import {ReactComponent as Chevron} from '../../static/icons/chevron.svg';
import {ReactComponent as Menubar} from '../../static/icons/menubar.svg';

const ICONS = {
  huddle: {
    logo: HuddleLogo,
    dropdownArrow: HuddleDropdownArrow
  },
  unitas: {
    logo: UnitasLogo,
    dropdownArrow: UnitasDropdownArrow
  },
  prime: {
    logo: PrimeLogo,
    dropdownArrow: PrimeDropdownArrow
  },
};

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
    name: 'Types',
    mobile: true,
    subLinks: [
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
    ]
  },
  {
    name: 'Resources',
    path: '/resources',
    mobile: true
  },
  {
    name: 'Work for us',
    path: '/work-for-us',
    mobile: true
  },
  {
    name: 'Contact us',
    path: '/contact-us',
    mobile: true
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
        path: '/companies/huddle'
      },
      {
        name: 'Unitas',
        path: '/companies/unitas'
      },
      {
        name: 'Spectrum',
        path: '/companies/spectrum'
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

const groupedDropdowns = ['Sectors', 'Specialisms'];

const Navigator = ({
  children
}) => {
  const [expanded, setExpanded] = useState('');
  const [pathname, setPathname] = useState('');
  const [navVisible, setNavVisible] = useState(true);
  const [sideMenuDisplayed, setSideMenuDisplayed] = useState(false);
  const [dropdownDisplayed, setDropdownDisplayed] = useState(false);

  const toggleSidebar = () => setSideMenuDisplayed(!sideMenuDisplayed);
  const hideSidebar = () => setSideMenuDisplayed(false);

  const toggleDropdown = () => setDropdownDisplayed(!dropdownDisplayed);
  const hideDropdown = () => setDropdownDisplayed(false);

  const location = useLocation();

  const content = useMemo(() => children, [children]);

  const handleExpandClick = route => setExpanded(expanded === route ? '' : route);

  const closeExpandClick = () => expanded && setExpanded('');

  useEffect(() => {
    if (pathname !== '' && !location.hash) {
      window.scrollTo(0, 0);
    }
    closeExpandClick();
    hideDropdown();
    setPathname(`/${location.pathname.split('/')[1]}`);
  }, [location, pathname]);

  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      if (navVisible === true) {
        if (window.scrollY >= 130) {
          setNavVisible(false);
        }
      } else if (window.scrollY <= 228) {
        setNavVisible(true);
      }
    });
  });

  const renderNormalDropdown = route => expanded === route.name && (
    <div className='nav-dropdown'>
      <img
        alt='dropdown-arrow'
        src={ICONS[NAMESPACE].dropdownArrow}
      />
      <div>
        {route.subLinks.map((subLink, i) => (
          <div key={i}>
            <span>
              <Link to={subLink.path} onClick={hideSidebar}>
                {subLink.name}
              </Link>
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
        src={ICONS[NAMESPACE].dropdownArrow}
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

  const renderNavList = (mobile = false) => (
    <div className='nav-list'>
      {routes[NAMESPACE].map((route, i) => (!mobile ? !route.mobile : true) && (
        <div key={i} onClick={() => {
          if (route.subLinks) {
            handleExpandClick(route.name)
          }
        }}>
          {route.subLinks ? (
            <span>
              {route.name}
              <Chevron />
            </span>
          ) : (
            <span>
              <Link to={route.path} onClick={hideSidebar}>
                {route.name}
              </Link>
            </span>
          )}
          {route.subLinks && renderDropdown(route)}
        </div>
      ))}
    </div>
  );

  const renderHeader = () => (
    <div className={cx('header-outer-container', {
      'header-home': location.pathname === '/' && isHuddle && navVisible
    })}>
      <div className='container'>
        <div className='header-inner-container'>
          <div className='header'>
            <div className='header-container'>
              <div className='header-inner'>
                <Link to='/'>
                  <img alt='logo' className='logo' src={ICONS[NAMESPACE].logo} />
                </Link>
                <div className='header-nav'>
                  <div className='header-nav-list'>
                    {renderNavList()}
                  </div>
                  <Menubar onClick={toggleSidebar} />
                </div>
              </div>
            </div>
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
              src={ICONS[NAMESPACE].logo}
            />
          </Link>
          <Chevron onClick={hideSidebar} />
        </div>
        {renderNavList(true)}
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
        />
      )}
      {renderHeader()}
      {pathname.includes('/resources') && <ResourcesNav />}
      <div id='content' onClick={closeExpandClick}>
        {content}
        <Footer
          expandClick={handleExpandClick}
          toggleSidebar={toggleSidebar}
        />
      </div>
    </div>
  );
}

export default Navigator;
