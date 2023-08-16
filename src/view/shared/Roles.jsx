import React from 'react';
import {Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import {isHuddle} from '../../services/helper';
import Role from './Role';

import ArrowIcon from '../../static/huddle/arrow.svg';
import UnitasArrowIcon from '../../static/unitas/request-arrow.svg';

const Roles = props => {
  const {children, name} = props;

  return (
    <div className='box roles-box'>
      <div className='roles-header'>
        <h3>
          {children}
        </h3>
        <Link to='/jobs'>
          {`Browse all ${name ? `${name} ` : ''}jobs`}
          <img
            alt='arrow'
            src={isHuddle ? ArrowIcon : UnitasArrowIcon}
          />
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
