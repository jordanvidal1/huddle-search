import React from 'react';
import {Grid} from '@material-ui/core';
import ArrowIcon from '../../../static/arrow.svg';
import './styles.scss';

const WorkForUs = () =>  (
  <div className='work-for-us'>
    <div className='container'>
      <div className='inner-container'>
        <div className='content'>
          <div className='title'>
            <h2>
              More reasons to get <a>excited</a> about Huddle
            </h2>
          </div>
          <div className='text'>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tortor est ipsum quis sed aliquam penatibus. Sagittis tellus venenatis quam nullam vitae quam risus faucibus.
            </p>
          </div>
          <Grid container spacing={4} className='grid-container' alignItems='center'>
            <Grid item xs={6} center>
              <div className='link-container'>
                <a>
                  <span>Leadership team</span>
                  <img alt='arrow-icon' src={ArrowIcon} />
                </a>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className='link-container'>
                <a>
                  <span>Corporate social responsibility</span>
                  <img alt='arrow-icon' src={ArrowIcon} />
                </a>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className='link-container'>
                <a>
                  <span>Our story</span>
                  <img alt='arrow-icon' src={ArrowIcon} />
                </a>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className='link-container'>
                <a>
                  <span>Diversity, equality & inclusion</span>
                  <img alt='arrow-icon' src={ArrowIcon} />
                </a>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className='link-container'>
                <a>
                  <span>Our process</span>
                  <img alt='arrow-icon' src={ArrowIcon} />
                </a>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className='link-container'>
                <a>
                  <span>The Prime Group</span>
                  <img alt='arrow-icon' src={ArrowIcon} />
                </a>
              </div>
            </Grid>
          </Grid>
          <div className='cv-container'>
            <h5>
              Want to work for us?
            </h5>
            <p>
              Huddle is always on the lookout for talent. If you want to join our incredible team, check out our open roles.
            </p>
            <div className='link-container'>
              <a>
                <span>Join the team<img alt='arrow-icon' src={ArrowIcon} /></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WorkForUs;
