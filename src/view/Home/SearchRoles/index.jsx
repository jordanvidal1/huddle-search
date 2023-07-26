import React from 'react';
import {Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import SearchBar from '../../shared/SearchBar';
import Role from '../../shared/Role'
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
                  <SearchBar />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className='box roles-box'>
                  <div className='roles-header'>
                    <h3>
                      Latest roles
                    </h3>
                    <Link to='/jobs'>
                      <span>Browse all jobs</span>
                      <img alt='arrow' src={ArrowIcon} />
                    </Link>
                  </div>
                  <Grid container spacing={3}>
                    <Role />
                    <Role />
                    <Role />
                    <Role />
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
