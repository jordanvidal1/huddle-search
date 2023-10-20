import React from 'react';
import cx from 'classnames';
import {Grid} from '@material-ui/core';
import {NAMESPACE} from '../../data/constants';
import {renderNumber} from '../../services/helper';

import HuddleSalary from '../../static/huddle/salary-pink.svg';
import HuddleBenefits from '../../static/huddle/benefits-pink.svg';
import HuddleLocation from '../../static/huddle/location-pink.svg';
import UnitasSalary from '../../static/unitas/salary.svg';
import UnitasBenefits from '../../static/unitas/benefits.svg';
import UnitasLocation from '../../static/unitas/location.svg';
import PrimeSalary from '../../static/prime/salary.svg';
import PrimeBenefits from '../../static/prime/benefits.svg';
import PrimeLocation from '../../static/prime/location-pink.svg';

const ICONS = {
  huddle: {
    salary: HuddleSalary,
    benefits: HuddleBenefits,
    location: HuddleLocation
  },
  unitas: {
    salary: UnitasSalary,
    benefits: UnitasBenefits,
    location: UnitasLocation
  },
  prime: {
    salary: PrimeSalary,
    benefits: PrimeBenefits,
    location: PrimeLocation
  }
};

const Role = props => {
  const {i, type, title, salary, benefits, location} = props;

  const classNames = cx('role-type', {
    permanent: type === 'Permanent',
    contract: type === 'Contract'
  });

  return (
    <Grid item xs={12} sm={6} md={3} className='role-grid-item'>
      <div key={i} className='role'>
        <div className='role-container'>
          <div className={classNames}>
            <span>
              {type}
            </span>
          </div>
          <div className='role-title'>
            <h6>
              {title}
            </h6>
          </div>
          <div className='role-details'>
            <span>
              <img
                alt='salary'
                src={ICONS[NAMESPACE].salary}
              />
              £{renderNumber(salary)} per year
            </span>
            <span>
              <img
                alt='benefits'
                src={ICONS[NAMESPACE].benefits}
              />
              {benefits}
            </span>
            <span>
              <img
                alt='location'
                src={ICONS[NAMESPACE].location}
              />
              {location}
            </span>
          </div>
          <div className='role-description'>
            <p>
              Lorem ipsum dolor sit amet consectetur. Morbi curs usamet habit asse nisl est rhoncus.
            </p>
          </div>
          <div className='btn-container'>
            <button className='btn btn-primary'>
              See job
            </button>
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default Role;

Role.defaultProps = {
  type: 'Permanent',
  title: 'Job title that breaks onto 3 lines',
  salary: 50000,
  benefits: 'Car, Pension, Bonus, LTIP',
  location: 'London, UK'
};
