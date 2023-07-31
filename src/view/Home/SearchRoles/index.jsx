import React from 'react';
import {Grid} from '@material-ui/core';
import SearchBar from '../../shared/SearchBar';
import Roles from '../../shared/Roles';
import './styles.scss';

const SearchRoles = () => {
  return (
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
                  <SearchBar>
                    Search by title, keyword, specialism or sector...
                  </SearchBar>
                </div>
              </Grid>
              <Grid item xs={12}>
                <Roles featured />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchRoles;
