import React from 'react';
import {Grid} from '@material-ui/core';

const InfoBox = ({ icon, title, text }) => (
  <Grid item xs={12} sm={6}>
    <div className='info-container'>
      <div className='info-icon'>
        <img alt='info-icon' src={icon} />
      </div>
      <h5>
        {title}
      </h5>
      <p>
        {text}
      </p>
    </div>
  </Grid>
);

export default InfoBox;
