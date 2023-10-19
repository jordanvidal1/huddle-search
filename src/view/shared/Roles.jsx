import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Grid} from '@material-ui/core';
import {NAMESPACE} from '../../data/constants';
import {isHuddle, isPrime} from '../../services/helper';
import Role from './Role';

import ArrowIcon from '../../static/huddle/arrow.svg';
import UnitasArrowIcon from '../../static/unitas/request-arrow.svg';

const Roles = props => {
  const {roles, name, icon} = props;

  const {t} = useTranslation(['huddle', 'unitas', 'prime']);

  return (
    <div className='box roles-box'>
      <div className='roles-header'>
        <h3>
          {t(`${NAMESPACE}:leadershipHero:workForUs:roles:title`, {siteName: NAMESPACE})}
        </h3>
        {!isPrime && (
          <Link to='/jobs'>
            {`Browse all ${name ? `${name} ` : ''}jobs`}
            <img
              alt='arrow'
              src={isHuddle ? ArrowIcon : (icon || UnitasArrowIcon)}
            />
          </Link>
        )}
      </div>
      <Grid container spacing={3} className='roles-container'>
        {/*{roles?.length > 0 && roles.slice(0, 12).map((role, i) => (*/}
        {/*  <Role i={i} {...role} />*/}
        {/*))}*/}
        <Role />
        <Role />
        <Role />
        <Role />
      </Grid>
    </div>
  );
}

export default Roles;
