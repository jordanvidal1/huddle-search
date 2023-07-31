import React from 'react';
import {Grid} from '@material-ui/core';
import Logo from '../../../static/full-logo-dark.svg';
import ArrowIcon from '../../../static/arrow-white.svg';
import InfoIcon1 from '../../../static/executive-icon-1.svg';
import InfoIcon2 from '../../../static/executive-icon-2.svg';
import InfoIcon3 from '../../../static/executive-icon-3.svg';
import InfoIcon4 from '../../../static/executive-icon-4.svg';
import InfoBox from '../InfoBox'
import './styles.scss';

const ExecutiveSearch = () => (
  <div className='executive-search'>
    <div className='container'>
      <div className='inner-container'>
        <div className='content'>
          <img className='logo' alt='logo' src={Logo} />
          <div className='title'>
            <h2>
              Executive Search
            </h2>
          </div>
          <div className='text'>
            <span>
              Lorem ipsum dolor sit amet consectetur. Tortor est ipsum quis sed aliquam penatibus. Sagittis tellus venenatis quam nullam vitae quam risus faucibus. Arcu malesuada turpis vitae maecenas mattis porttitor. <a>Find out more<img className='arrow-icon' alt='arrow-icon' src={ArrowIcon} /></a>
            </span>
          </div>
          <Grid container spacing={2} className='grid-container'>
            <InfoBox icon={InfoIcon1} />
            <InfoBox icon={InfoIcon2} />
            <InfoBox icon={InfoIcon3} />
            <InfoBox icon={InfoIcon4} />
          </Grid>
          <div className='btn-container'>
            <button className="btn">
              Find out more
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ExecutiveSearch;
