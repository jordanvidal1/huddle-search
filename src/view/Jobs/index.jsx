import React from 'react';
import {Grid} from '@material-ui/core';
import SearchBar from '../shared/SearchBar';
import Role from '../shared/Role';

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
          <SearchBar placeholder='Search by title, keyword, specialism or sector...' />
          {/* todo: mobile placeholder */}
          {/* todo: sort by / filters */}
          <div className='jobs-grid'>
            <Grid container spacing={3} justifyContent='center'>
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
