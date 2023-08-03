import React from 'react';

const TextField = props => (
  <div className='textfield'>
    {props.label && <label htmlFor={props.name}>{props.label}</label>}
    <div className='input-container'>
      {props.img && <img className='search-icon' alt='search-icon' src={props.img} />}
      <input {...props} />
    </div>
  </div>
);

export default TextField;