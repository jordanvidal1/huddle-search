import React from 'react';
import cx from 'classnames';
import {Grid} from '@material-ui/core';
import {isHuddle, renderNumber} from '../../../services/helper';
import SalaryIcon from '../../../static/huddle/salary.svg';
import UnitasSalaryIcon from '../../../static/unitas/salary.svg';

const FeaturedRole = props => {
  const {type, title, salary} = props;

  const classNames = cx('role-type', {
    permanent: type === 'Permanent',
    contract: type === 'Contract'
  });

  return (
    <Grid item xs={12} sm={4}>
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
            <img
              alt='salary-icon'
              src={isHuddle ? SalaryIcon : UnitasSalaryIcon}
            />
            <span>
              £{renderNumber(salary)} per year
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
