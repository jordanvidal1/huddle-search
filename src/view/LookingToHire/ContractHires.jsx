import React from 'react';
import {Link} from 'react-router-dom';

const ContractHires = () => (
  <div className='contract-hires'>
    <div className='container'>
      <div className='inner-container'>
        <div className='content'>
          <div className='title'>
            <h2>
              <a>Contract</a> hires to deliver your project
            </h2>
          </div>
          <div className='text'>
            <span className='body'>
              Lorem ipsum dolor sit amet consectetur. Tortor est ipsum quis sed aliquam penatibus. Sagittis tellus venenatis quam nullam vitae quam risus faucibus. Arcu malesuada turpis vitae maecenas mattis porttitor.
            </span>
          </div>
          <div className='btn-container'>
            <Link to='/contract-interim' className="btn btn-secondary">
              Find out more
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContractHires;