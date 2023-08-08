import React from 'react';
import TextField from './TextField';
import SearchIcon from '../../static/search.svg';

const SearchBar = ({
  placeholder
}) => (
  <div className='search-bar'>
    <TextField
      id='search'
      type='text'
      name='search'
      placeholder={placeholder}
      autoComplete='off'
      img={SearchIcon}
    />
  </div>
);

export default SearchBar;
