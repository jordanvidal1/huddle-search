import React from 'react';
import {Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import Resource from '../Resource'
import ArrowIcon from '../../../static/arrow.svg';
import './styles.scss';

const Resources = props => {
  const {name} = props;

  return (
    <div className='box resources-box'>
      <div className='resources-header'>
        <h3>
          Related resources
        </h3>
        <Link to='/resources'>
          <span>{`Browse all ${name ? `${name} ` : ''}resources`}</span>
          <img alt='arrow' src={ArrowIcon} />
        </Link>
      </div>
      <Grid container spacing={3}>
        <Resource />
        <Resource />
        <Resource />
        <Resource />
      </Grid>
    </div>
  );
}

export default Resources;
