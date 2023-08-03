import React from 'react';
import {Link} from 'react-router-dom';
import HeaderArrow from '../../../static/header-arrow.svg';
import DropdownArrow from '../../../static/dropdown-arrow.svg';
import Logo from '../../../static/full-logo-dark.svg';

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
  expanded,
  expandClick
}) => {
  const renderDropdown = subLinks => expanded && (
    <div className='nav-dropdown'>
      <img alt='dropdown-arrow' src={DropdownArrow} />
      <div>
        {subLinks.map((subLink, i) => (
          <div key={i}>
            <Link to={subLink.path}>
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
            onClick={route.subLinks && expandClick}
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

  return (
    <div className='header-container'>
      <div className='header-inner-container'>
        <Link to='/' onClick={expanded && expandClick}>
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
