import React from 'react';
import {Grid} from '@material-ui/core';
import SearchBar from '../shared/SearchBar';
import Role from '../shared/Role';

const Jobs = ({
  roles
}) => (
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
            <div>
              <span>Results ({roles?.length || 0})</span>
            </div>
            <Grid container spacing={3} justifyContent='center'>
              {roles?.map((role, i) => (
                <Role i={i} {...role} />
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Jobs;

Jobs.defaultProps = {
  roles: [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ]
};
