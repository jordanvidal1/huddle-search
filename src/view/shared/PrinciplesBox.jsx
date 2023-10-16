import React from 'react';
import {Grid} from '@material-ui/core';
import {NAMESPACE} from '../../data/constants';

const PrinciplesBox = ({ t, type, number }) => (
  <Grid item xs={12} sm={4}>
    <div className='principles-container'>
      <h2>
        {t(`${NAMESPACE}:leadershipHero:${type}:info:points:${number}:number`)}
      </h2>
      <div className='principles-title'>
        <h5>
          {t(`${NAMESPACE}:leadershipHero:${type}:info:points:${number}:title`)}
        </h5>
      </div>
      <div className='principles-text'>
        <p>
          {t(`${NAMESPACE}:leadershipHero:${type}:info:points:${number}:text`)}
        </p>
      </div>
    </div>
  </Grid>
);

export default PrinciplesBox;
