import React from 'react';
import {Grid} from '@material-ui/core';
import SearchBar from '../SearchBar';
import Roles from '../Roles';
import './styles.scss';

const SearchRoles = () =>  (
  <div className='search-roles'>
    <div className='container'>
      <div className='inner-container'>
        <div className='content'>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <div className='box'>
                <h2>
                  Search open roles
                </h2>
                <SearchBar placeholder='Search by title, keyword, specialism or sector...' />
              </div>
            </Grid>
            <Grid item xs={12}>
              <Roles>
                Featured roles
              </Roles>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  </div>
);

export default SearchRoles;
