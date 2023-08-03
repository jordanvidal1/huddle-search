import React from 'react';
import {Grid} from '@material-ui/core';
import SearchBar from '../shared/SearchBar';
import Resource from '../shared/Resource';
import './styles.scss';

const Resources = () =>  (
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
          <div className='resources-grid'>
            <Grid container spacing={3}>
              <Resource />
              <Resource />
              <Resource />
              <Resource />
              <Resource />
              <Resource />
              <Resource />
              <Resource />
              <Resource />
              <Resource />
              <Resource />
              <Resource />
            </Grid>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Resources;
