import React from 'react';
import SearchIcon from '../../../static/search.svg';
import './styles.scss';

const SearchBar = ({
  children
}) => {
  return (
    <div className='search-bar'>
      <img className='search-icon' alt='search-icon' src={SearchIcon} />
      {children}
    </div>
  );
}

export default SearchBar;
