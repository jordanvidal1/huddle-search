import React from 'react';
import Roles from './Roles';

const RolesPage = props => {
  const {type, name} = props;

  return (
    <div className={`related-roles ${type}`}>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <Roles name={name}>
              Related roles
            </Roles>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RolesPage;
