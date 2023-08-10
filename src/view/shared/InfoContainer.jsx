import React from 'react';
import {Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import VacancyIcon from '../../static/vacancy.svg';
import HelpIcon from '../../static/help.svg';
import CVIcon from '../../static/cv.svg';

const InfoContainer = () => (
  <Grid container spacing={3} justifyContent='center' className='info-grid-container'>
    <Grid item xs={12} sm={4}>
      <div className='info-container'>
        <div className='info-text-container'>
          <img alt='vacancy-icon' src={VacancyIcon} />
          <div className='info-title'>
            <h5>
              Have a vacancy to fill?
            </h5>
          </div>
          <div className='info-text'>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultrices sed dignissim.
            </p>
          </div>
        </div>
        <div className='btn-container'>
          <button className='btn btn-secondary'>
            Submit new role
          </button>
        </div>
      </div>
    </Grid>
    <Grid item xs={12} sm={4}>
      <div className='info-container'>
        <div className='info-text-container'>
          <img alt='help-icon' src={HelpIcon} />
          <div className='info-title'>
            <h5>
              Need help with something?
            </h5>
          </div>
          <div className='info-text'>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultrices sed dignissim.
            </p>
          </div>
        </div>
        <div className='btn-container'>
          <Link to='/contact-us' className='btn btn-secondary'>
            Talk to us
          </Link>
        </div>
      </div>
    </Grid>
    <Grid item xs={12} sm={4}>
      <div className='info-container'>
        <div className='info-text-container'>
          <img alt='cv-icon' src={CVIcon} />
          <div className='info-title'>
            <h5>
              Want 3 CVs with no obligations?
            </h5>
          </div>
          <div className='info-text'>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultrices sed dignissim.
            </p>
          </div>
        </div>
        <div className='btn-container'>
          <button className='btn btn-secondary'>
            Request role
          </button>
        </div>
      </div>
    </Grid>
  </Grid>
);

export default InfoContainer;
