import React from 'react';
import Preloader from '../../static/huddle/loader.svg';

const Loader = () => (
  <div className='loader'>
    <img alt='loader' src={Preloader} />
  </div>
);

export default Loader;
