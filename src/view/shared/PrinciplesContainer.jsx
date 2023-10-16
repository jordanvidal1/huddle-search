import React from 'react';
import {Grid} from '@material-ui/core';
import PrinciplesBox from './PrinciplesBox';

const PrinciplesContainer = ({t, type}) => (
  <Grid container spacing={3} justifyContent='center' className='info-grid-container'>
    <PrinciplesBox t={t} type={type} number='1' />
    <PrinciplesBox t={t} type={type} number='2' />
    <PrinciplesBox t={t} type={type} number='3' />
    {type === 'corporate' && (
      <>
        <PrinciplesBox t={t} type={type} number='4' />
        <PrinciplesBox t={t} type={type} number='5' />
        <PrinciplesBox t={t} type={type} number='6' />
      </>
    )}
  </Grid>
);

export default PrinciplesContainer;
