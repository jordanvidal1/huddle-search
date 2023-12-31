import React from 'react';
import cx from 'classnames';
import {Grid} from '@material-ui/core';
import {renderNumber} from '../../services/helper';

import {ReactComponent as Salary} from '../../static/icons/salary.svg';
import {ReactComponent as Perk} from '../../static/icons/perk.svg';
import {ReactComponent as Location} from '../../static/icons/location.svg';

const Role = props => {
  const {i, type, title, salary, perks, location} = props;

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
              <Salary />
              £{renderNumber(salary)} per year
            </span>
            <span>
              <Perk />
              {perks}
            </span>
            <span>
              <Location />
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
  perks: 'Car, Pension, Bonus, LTIP',
  location: 'London, UK'
};
