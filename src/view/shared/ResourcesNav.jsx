import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import cx from 'classnames';
import useWordPress from '../../services/hooks/useWordPress';

import {ReactComponent as Chevron} from '../../static/icons/chevron.svg';

const filters = [
  // {
  //   name: 'All'
  // },
  {
    name: 'Blog',
    path: '/resources'
  },
  // {
  //   name: 'Insights'
  // },
  // {
  //   name: 'Case studies'
  // }
];

const ResourcesNav = () => {
  const {loadBlog} = useWordPress();

  const [dropdownDisplayed, setDropdownDisplayed] = useState(false);

  const toggleDropdown = () => setDropdownDisplayed(!dropdownDisplayed);
  const hideDropdown = () => setDropdownDisplayed(false);

  const renderResourcesNavList = () => (
    <div className='resources-nav-list'>
      {filters.map((filter, i) => (
        <div key={i}>
          {/* todo: temp condition */}
          <span
            className={cx({active: filter.name === 'Blog'})}
          >
            <Link
              to={filter.path}
              onClick={() => {hideDropdown();loadBlog();}}
            >
              {filter.name}
            </Link>
          </span>
        </div>
      ))}
    </div>
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
        {renderResourcesNavList()}
      </div>
    </div>
  );

  return (
    <div className='resources-nav'>
      <div className='resources-nav-container container'>
        <div className='resources-nav-inner'>
          <div className='resources-nav-list-container'>
            <div className='resources-nav-title'>
              <span>
                <Link to='/resources' onClick={loadBlog}>
                  Resources
                </Link>
              </span>
            </div>
            <div className='divider' />
            {renderResourcesNavList()}
          </div>
          <div
            className='resources-dropdown'
            onClick={toggleDropdown}
          >
            <span>
              Resources
            </span>
            <Chevron />
          </div>
        </div>
      </div>
      {renderDropdown()}
    </div>
  );
}

export default ResourcesNav;
