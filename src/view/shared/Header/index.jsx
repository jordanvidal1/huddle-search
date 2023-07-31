import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import cx from 'classnames';
import HeaderArrow from '../../../static/header-arrow.svg';
import DropdownArrow from '../../../static/dropdown-arrow.svg';
import Logo from '../../../static/full-logo-dark.svg'

import './styles.scss';

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

const Header = ({
  pathname
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => setExpanded(!expanded);

  const renderDropdown = subLinks => expanded && (
    <div className='nav-dropdown'>
      <img alt='dropdown-arrow' src={DropdownArrow} />
      <div>
        {subLinks.map((subLink, i) => (
          <div key={i}>
            <Link
              to={subLink.path}
              // onClick={hideSidebar}
            >
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
            className={cx({active: route.path === pathname})}
            onClick={route.subLinks && handleExpandClick}
          >
            <Link
              to={route.path}
              // onClick={hideSidebar}
            >
              {route.name}
              {route.subLinks && <img alt='arrow' src={HeaderArrow} />}
            </Link>
          </span>
          {route.subLinks && renderDropdown(route.subLinks)}
        </div>
      ))}
    </div>
  );

  return (
    <div className='header-container'>
      <div className='header-inner-container'>
        <Link to='/'>
          <img alt='logo' src={Logo} />
        </Link>
        <div className='header'>
          {renderNavList()}
        </div>
      </div>
    </div>
  );
}

export default Header;
