import React from 'react';
import {Grid} from '@material-ui/core';
// import Search from './Search';
import LatestRole from './LatestRole'
import ArrowIcon from '../../../static/arrow.svg';
import './styles.scss';

const Home = () => {
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
                  <div className='search' />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className='box roles-box'>
                  <div className='roles-header'>
                    <h3>
                      Latest roles
                    </h3>
                    <a>
                      <span>Browse all jobs</span>
                      <img alt='arrow' src={ArrowIcon} />
                    </a>
                  </div>
                  <Grid container spacing={3}>
                    <LatestRole />
                    <LatestRole />
                    <LatestRole />
                    <LatestRole />
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
