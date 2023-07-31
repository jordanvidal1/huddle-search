import React from 'react';
import {Grid} from '@material-ui/core';
import InfoBox from '../InfoBox'
import ArrowIcon from '../../../static/arrow.svg';
import InfoIcon1 from '../../../static/embedded-icon-1.svg';
import InfoIcon2 from '../../../static/embedded-icon-2.svg';
import InfoIcon3 from '../../../static/embedded-icon-3.svg';
import InfoIcon4 from '../../../static/embedded-icon-4.svg';
import './styles.scss';

const EmbeddedTalent = () => (
  <div className='embedded-talent'>
    <div className='container'>
      <div className='inner-container'>
        <div className='content'>
          <div className='title'>
            <h2>
              <a>Embedded</a> Talent Solutions
            </h2>
          </div>
          <div className='text'>
            <span className='body'>
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
            <button className="btn btn-secondary">
              Find out more
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EmbeddedTalent;
