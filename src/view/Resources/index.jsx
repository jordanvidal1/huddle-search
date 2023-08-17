import React from 'react';
import {Grid} from '@material-ui/core';
import SearchBar from '../shared/SearchBar';
import Resource from '../shared/Resource';
import Jobs from '../Jobs'
import Role from '../shared/Role'

const Resources = ({
  resources
}) =>  (
  <div className='resources'>
    <div className='container'>
      <div className='inner-container'>
        <div className='content'>
          <div className='title'>
            <h2>
              Browse all resources
            </h2>
          </div>
          <SearchBar placeholder='Search by title, keyword, specialism or sector...' />
          {/* todo: mobile placeholder */}
          {/* todo: sort by / filters */}
          <div className='resources-grid'>
            <div>
              <span>Results ({resources.length})</span>
            </div>
            <Grid container spacing={3} justifyContent='center'>
              {resources.map((resource) => (
                <Resource {...resource} />
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Resources;

Resources.defaultProps = {
  resources: [
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
