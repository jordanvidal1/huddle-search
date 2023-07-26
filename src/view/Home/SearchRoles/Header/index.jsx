import React from 'react';
import {Link} from 'react-router-dom';

const routes = [
  {name: 'Looking To Hire', link: 'looking-to-hire'},
  {name: 'Looking for a job', link: 'looking-for-a-job'},
  {name: 'Specialisms', link: 'specialisms'},
  {name: 'Sectors', link: 'sectors'},
  {name: 'About us', link: 'about-us'}
]

const Header = () => {

  const renderNavList = () => (
    <div className='nav-list'>
      {routes.map((route, i) => (
        <div key={i}>
          <span
            // className={cx({active: route.path === value})}
            // onClick={route.subLinks && handleExpandClick}
          >
            <Link
              to={route.path}
              // onClick={hideSidebar}
            >
              {route.name}
            </Link>
            {/*{route.subLinks && <ExpandMore className={expandClassName} />}*/}
          </span>
          {/*{route.subLinks && renderDropdown(route.subLinks)}*/}
        </div>
      ))}
    </div>
  );

  return (
    <div className='header'>
      {renderNavList()}
    </div>
  );
}

export default Header;
