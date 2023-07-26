import React from 'react';
import ArrowIcon from '../../arrow.svg';
import './styles.scss';

const LookingToHire = () => {
  return (
    <div className='looking-to-hire'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='title'>
              <h2>
                Looking to <a>hire?</a>
              </h2>
            </div>
            <div className='text'>
              <span className='body'>
                Lorem ipsum dolor sit amet consectetur. Tortor est ipsum quis sed aliquam penatibus. Sagittis tellus venenatis quam nullam vitae quam risus faucibus. Arcu malesuada turpis vitae maecenas mattis porttitor. <a>Find out more<img className='arrow-icon' alt='arrow-icon' src={ArrowIcon} /></a>
              </span>
            </div>
            <div className='btn-container'>
              <button className="btn btn-secondary">
                Submit new role
              </button>
              <button className="btn">
                Talk to us
              </button>
            </div>
            <div className='cv-container'>
              <h5>
                Be sent 3 CVs with no obligations
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur. Morbi curs usamet habit asse nisl est rhoncus.
              </p>
              <div className='link-container'>
                <a>
                  <span>Request now<img alt='arrow-icon' src={ArrowIcon} /></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LookingToHire;
