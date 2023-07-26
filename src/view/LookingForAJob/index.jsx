import React from 'react';
import {Link} from 'react-router-dom'
import {Grid} from '@material-ui/core';
import Header from '../shared/Header';
import FeaturedRole from './FeaturedRole';
import ArrowIcon from '../../static/arrow.svg';
import Logo from '../../static/full-logo-dark.svg';
import './styles.scss';

const LookingForAJob = () => {
  return (
    <div className='looking-for-a-job'>
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
                Looking for a <a>job?</a>
              </h2>
            </div>
            <div className='text'>
              <span className='body'>
                Lorem ipsum dolor sit amet consectetur. Tortor est ipsum quis sed aliquam penatibus. Sagittis tellus venenatis quam nullam vitae quam risus faucibus. Arcu malesuada turpis vitae maecenas mattis porttitor. <a>Find out more<img className='arrow-icon' alt='arrow-icon' src={ArrowIcon} /></a>
              </span>
            </div>
            <div className='featured-roles'>
              <div className='featured-roles-container'>
                <div className='subtitle-container'>
                  <h5>
                    Featured roles
                  </h5>
                  <div className='link-container'>
                    <a>
                      <span>Browse all jobs<img alt='arrow-icon' src={ArrowIcon} /></span>
                    </a>
                  </div>
                </div>
                <div className='roles'>
                  <Grid container spacing={2}>
                    <FeaturedRole />
                    <FeaturedRole />
                    <FeaturedRole />
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LookingForAJob;
