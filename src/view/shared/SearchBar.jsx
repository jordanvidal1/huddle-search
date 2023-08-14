import React from 'react';
import Input from './Input';
import SearchIcon from '../../static/huddle/search.svg';

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
    {/* todo: reset button */}
  </div>
);

export default SearchBar;
