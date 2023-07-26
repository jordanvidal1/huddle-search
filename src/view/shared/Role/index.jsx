import React from 'react';
import cx from 'classnames';
import {Grid} from '@material-ui/core';
import Salary from '../../../static/salary-pink.svg';
import Benefits from '../../../static/benefits-pink.svg';
import Location from '../../../static/location-pink.svg';
import './styles.scss';

const Role = props => {
  const {type, title, salary, benefits, location} = props;

  const classNames = cx('role-type', {
    ['permanent']: type === 'Permanent',
    ['contract']: type === 'Contract'
  });

  return (
    <Grid item xs={3}>
      <div className='role'>
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
              <img alt='salary' src={Salary} />£{salary} per year
              {/* todo: number display function */}
            </span>
            <span>
              <img alt='benefits' src={Benefits} />{benefits}
            </span>
            <span>
              <img alt='location' src={Location} />{location}
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
