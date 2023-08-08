import React from 'react';
import {Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import Logo from '../../static/text-logo-gold.svg';
import InfoIcon1 from '../../static/executive-icon-1.svg';
import InfoIcon2 from '../../static/executive-icon-2.svg';
import InfoIcon3 from '../../static/executive-icon-3.svg';
import InfoIcon4 from '../../static/executive-icon-4.svg';
import InfoBox from './InfoBox';

const ExecutiveSearch = () => (
  <div className='executive-search'>
    <div className='container'>
      <div className='inner-container'>
        <div className='content'>
          <div className='text-container'>
            <div className='title'>
              <p>
                A specialist service by<img alt='logo-gold' src={Logo} />
              </p>
              <h1>
                Executive
              </h1>
              <p>
                SEARCH
              </p>
            </div>
            <div className='text'>
              <span>
                Lorem ipsum dolor sit amet consectetur. Tortor est ipsum quis sed aliquam penatibus. Sagittis tellus venenatis quam nullam vitae quam risus faucibus. Arcu malesuada turpis vitae.
              </span>
            </div>
          </div>
          <Grid container spacing={2} className='grid-container'>
            <InfoBox icon={InfoIcon1} />
            <InfoBox icon={InfoIcon2} />
            <InfoBox icon={InfoIcon3} />
            <InfoBox icon={InfoIcon4} />
          </Grid>
          <div className='btn-container'>
            <Link to='/executive-search' className="btn">
              Find out more
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ExecutiveSearch;
