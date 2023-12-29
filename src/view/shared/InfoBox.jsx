import React from 'react';
import {Grid} from '@material-ui/core';

const InfoBox = ({ children, title, text }) => (
  <Grid item xs={12}>
    <div className='info-container'>
      <div className='info-icon'>
        {children}
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
