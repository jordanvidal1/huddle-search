import React from 'react';
import {Grid} from '@material-ui/core';
import SearchBar from '../shared/SearchBar';
import Role from '../shared/Role';
import './styles.scss';

const Jobs = () => (
  <div className='jobs'>
    <div className='container'>
      <div className='inner-container'>
        <div className='content'>
          <div className='title'>
            <h2>
              Browse all jobs
            </h2>
          </div>
          <SearchBar>
            Search by title, keyword, specialism or sector...
          </SearchBar>
          <div className='jobs-grid'>
            <Grid container spacing={3}>
              <Role />
              <Role />
              <Role />
              <Role />
              <Role />
              <Role />
              <Role />
              <Role />
              <Role />
              <Role />
              <Role />
              <Role />
            </Grid>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Jobs;
