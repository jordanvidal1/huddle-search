import React from 'react';
import {Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import {isHuddle} from '../../services/helper';
import Resource from './Resource';

import ArrowIcon from '../../static/huddle/arrow.svg';
import UnitasArrowIcon from '../../static/unitas/request-arrow.svg';

const Resources = props => {
  const {resources, name} = props;

  return (
    <div className='box resources-box'>
      <div className='resources-header'>
        <h3>
          Related resources
        </h3>
        <Link to='/resources'>
          {`Browse all ${name ? `${name} ` : ''}resources`}
          <img alt='arrow' src={isHuddle ? ArrowIcon : UnitasArrowIcon} />
        </Link>
      </div>
      {/* todo: slider */}
      <Grid container spacing={3} className='resources-container'>
        {resources?.length > 0 && resources.slice(0, 12).map((resource, i) => (
          <Resource i={i} {...resource} />
        ))}
      </Grid>
    </div>
  );
}

export default Resources;
