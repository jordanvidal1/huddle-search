import React from 'react';
import {Link} from 'react-router-dom';
import {isHuddle} from '../../services/helper';

import Logo from '../../static/huddle/full-logo-dark.svg';
import UnitasLogo from '../../static/unitas/full-logo.svg';
import Menubar from '../../static/huddle/menubar.svg';
import UnitasMenubar from '../../static/unitas/menubar.svg';

const Header = ({
  children,
  toggleSidebar
}) => (
  <div className='header'>
    <div className='header-container container'>
      <div className='header-inner'>
        <Link to='/'>
          <img alt='logo' className='logo' src={isHuddle ? Logo : UnitasLogo} />
        </Link>
        <div className='header-nav'>
          <div className='header-nav-list'>
            {children}
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

export default Header;