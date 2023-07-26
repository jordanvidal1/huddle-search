import React from 'react';
import {Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import TopNav from '../shared/TopNav';
import Header from '../shared/Header';
import SearchBar from '../shared/SearchBar';
import Role from '../shared/Role';
import Logo from '../../static/full-logo-dark.svg';
import './styles.scss';

const Jobs = () => {
  return (
    <div className='jobs'>
      <TopNav />
      <div className='header-container'>
        <div className='header-inner-container'>
          <Link to='/'>
            <img alt='logo' src={Logo} />
          </Link>
          <Header />
        </div>
      </div>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='title'>
              <h2>
                Browse all jobs
              </h2>
            </div>
            <SearchBar />
            <div className='roles'>
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
}

export default Jobs;
