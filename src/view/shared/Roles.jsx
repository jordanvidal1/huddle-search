import React from 'react';
import {Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import Role from './Role';
import ArrowIcon from '../../static/huddle/arrow.svg';

const Roles = props => {
  const {children, name} = props;

  return (
    <div className='box roles-box'>
      <div className='roles-header'>
        <h3>
          {children}
        </h3>
        <Link to='/jobs'>
          <span>{`Browse all ${name ? `${name} ` : ''}jobs`}</span>
          <img alt='arrow' src={ArrowIcon} />
        </Link>
      </div>
      {/* todo: slider */}
      <Grid container spacing={3}>
        <Role />
        <Role />
        <Role />
        <Role />
      </Grid>
    </div>
  );
}

export default Roles;
