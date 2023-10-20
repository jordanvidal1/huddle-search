import React from 'react';
import {NAMESPACE} from '../../data/constants';
import Input from './Input';

import HuddleSearchIcon from '../../static/huddle/search.svg';
import UnitasSearchIcon from '../../static/unitas/search.svg';
import PrimeSearchIcon from '../../static/prime/search.svg';

const ICONS = {
  huddle: HuddleSearchIcon,
  unitas: UnitasSearchIcon,
  prime: PrimeSearchIcon
};

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
      img={ICONS[NAMESPACE]}
    />
    {/* todo: reset button */}
  </div>
);

export default SearchBar;
