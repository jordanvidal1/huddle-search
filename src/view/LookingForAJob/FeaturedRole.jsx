import React from 'react';
import cx from 'classnames';
import {Grid} from '@material-ui/core';
import SalaryIcon from '../../salary.svg';

const FeaturedRole = props => {
  const {type, title, salary} = props;

  const classNames = cx('role-type', {
    ['permanent']: type === 'Permanent',
    ['contract']: type === 'Contract'
  });

  return (
    <Grid item xs={4}>
      <div className='featured-role'>
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
          <div className='role-salary'>
            <img alt='salary-icon' src={SalaryIcon} />
            <span>
              £{salary} per year
              {/* todo: number display function */}
            </span>
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default FeaturedRole;

FeaturedRole.defaultProps = {
  type: 'Permanent',
  title: 'Job title that breaks onto 3 lines',
  salary: 50000
};
