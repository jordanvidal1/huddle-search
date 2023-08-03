import React from 'react';
import {Grid} from '@material-ui/core';

const InfoBox = ({ icon, title, text }) => (
  <Grid item xs={6}>
    <div className='info-container'>
      <img alt='info-icon' src={icon} />
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

InfoBox.defaultProps = {
  title: 'Tortor est ipsum quis',
  text: 'Lorem ipsum dolor sit amet conse tetur. Morbi curs usamet habit asse nisl est rhoncus. Lorem ipsum dolor sit amet.'
};
