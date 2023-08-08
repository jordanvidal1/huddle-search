import React from 'react';
import {Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';

import ArrowIcon from '../../static/arrow.svg';
import ArrowGoldIcon from '../../static/arrow-gold.svg';

const WorkForUs = ({
  home,
  executive
}) => {
  const arrowIcon = executive ? ArrowGoldIcon : ArrowIcon;

  return (
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
                Lorem ipsum dolor sit amet consectetur. Tortor est ipsum quis
                sed aliquam penatibus. Sagittis tellus venenatis quam nullam
                vitae quam risus faucibus.
              </p>
            </div>
            <Grid container spacing={4} className='grid-container'
                  alignItems='center'>
              <Grid item xs={6} center>
                <div className='link-container'>
                  <Link to='/leadership-team'>
                    Leadership team
                    <img alt='arrow-icon' src={arrowIcon}/>
                  </Link>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className='link-container'>
                  <Link to='/corporate-responsibility'>
                    Corporate social responsibility
                    <img alt='arrow-icon' src={arrowIcon}/>
                  </Link>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className='link-container'>
                  <Link to='/our-story'>
                    Our story
                    <img alt='arrow-icon' src={arrowIcon}/>
                  </Link>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className='link-container'>
                  <Link to='/diversity'>
                    Diversity, equality & inclusion
                    <img alt='arrow-icon' src={arrowIcon}/>
                  </Link>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className='link-container'>
                  <Link to='/our-process'>
                    Our process
                    <img alt='arrow-icon' src={arrowIcon}/>
                  </Link>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className='link-container'>
                  <Link to='/the-prime-group'>
                    The Prime Group
                    <img alt='arrow-icon' src={arrowIcon}/>
                  </Link>
                </div>
              </Grid>
            </Grid>
            {home && (
              <div className='cv-container'>
                <h5>
                  Want to work for us?
                </h5>
                <p>
                  Huddle is always on the lookout for talent. If you want to
                  join our incredible team, check out our open roles.
                </p>
                <div className='link-container'>
                  <Link to='/work-for-us'>
                    Join the team<img alt='arrow-icon' src={ArrowIcon}/>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkForUs;
