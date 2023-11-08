import React from 'react';
import {Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import {NAMESPACE} from '../../data/constants';
import {isPrime} from '../../services/helper';
import Resource from './Resource';
import Loader from './Loader';

import HuddleArrowIcon from '../../static/huddle/arrow.svg';
import UnitasArrowIcon from '../../static/unitas/request-arrow.svg';
import PrimeArrowIcon from '../../static/prime/arrow.svg';

const ICONS = {
  huddle: HuddleArrowIcon,
  unitas: UnitasArrowIcon,
  prime: PrimeArrowIcon
};

const Resources = props => {
  const {t, name, resources, isLoading} = props;

  const linkName = name ? `${name} ` : '';

  return (
    <div className='box resources-box'>
      <div className='resources-header'>
        <h3>
          {t(`${NAMESPACE}:resources:title`)}
        </h3>
        <Link to={isPrime ? '/blog' : '/resources'}>
          {t(`${NAMESPACE}:resources:link`, {name: linkName})}
          <img alt='arrow' src={ICONS[NAMESPACE]} />
        </Link>
      </div>
      {isLoading && resources.length < 1 ? <Loader />
        : (
          <Grid container spacing={3} className='resources-container'>
            {resources?.length > 0 && resources.slice(0, 12).map((resource, i) => (
              <Resource i={i} {...resource} />
            ))}
          </Grid>
        )}
    </div>
  );
}

export default Resources;
