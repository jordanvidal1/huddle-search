import React from 'react';
import {isHuddle} from '../../services/helper';
import Input from './Input';

import SearchIcon from '../../static/huddle/search.svg';
import UnitasSearchIcon from '../../static/unitas/search.svg';

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
      img={isHuddle ? SearchIcon : UnitasSearchIcon}
    />
    {/* todo: reset button */}
  </div>
);

export default SearchBar;
