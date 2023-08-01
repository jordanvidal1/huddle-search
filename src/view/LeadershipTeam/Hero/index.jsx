import React from 'react';
import './styles.scss';

const Hero = props => {
  const {children} = props;

  return (
    <div className='hero'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='text-container'>
              <h5>
                /leadership-team
              </h5>
              <div className='title'>
                <h1>
                  {children}
                </h1>
              </div>
              <div className='text'>
                <span>
                  Lorem ipsum dolor sit amet consectetur. Nibh bibendum tempor lorem a non mauris hendrerit mauris. Vitae cursus orci vulputate condimentum.
                </span>
              </div>
            </div>
            <div className='info-container'>
              <div className='info-box'>
                <div className='info-title'>
                  <h5>
                    The leadership in numbers...
                  </h5>
                </div>
                <div className='info-details'>
                  <div className='info-detail'>
                    <h2>50</h2>
                    <span>Years experienced</span>
                  </div>
                  <div className='info-detail'>
                    <h2>10K</h2>
                    <span>Clients served</span>
                  </div>
                  <div className='info-detail'>
                    <h2>50K</h2>
                    <span>Candidates placed</span>
                  </div>
                  <div className='info-detail'>
                    <h2>100</h2>
                    <span>Sectors operated</span>
                  </div>
                  <div className='info-detail'>
                    <h2>250</h2>
                    <span>Specialisms mastered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
