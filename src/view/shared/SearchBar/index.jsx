import React from 'react';
import SearchIcon from '../../../static/search.svg';
import './styles.scss';

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <img className='search-icon' alt='search-icon' src={SearchIcon} />
      Search by title, keyword, specialism or sector...
    </div>
  );
}

export default SearchBar;
