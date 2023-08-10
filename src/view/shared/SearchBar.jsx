import React from 'react';
import Input from './Input';
import SearchIcon from '../../static/search.svg';

const SearchBar = ({
  placeholder
}) => (
  <div className='search-bar'>
    <Input
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
