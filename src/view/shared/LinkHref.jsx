import React from 'react';

const LinkHref = props => (
  <a {...props} target='_blank' rel='noreferrer'>
    {props.children}
  </a>
);

export default LinkHref;
