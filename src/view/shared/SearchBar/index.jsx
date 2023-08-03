import React from 'react';
import SearchIcon from '../../../static/search.svg';
import './styles.scss';

const SearchBar = ({
  placeholder
}) => (
  <div className='search-bar'>
    <div className='input-container'>
      <img className='search-icon' alt='search-icon' src={SearchIcon} />
      <input
        id='search'
        type='text'
        name='search'
        placeholder={placeholder}
        autoComplete='off'
      />
    </div>
  </div>
);

export default SearchBar;
