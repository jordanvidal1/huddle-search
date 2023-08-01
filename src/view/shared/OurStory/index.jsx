import React from 'react';
import './styles.scss';

const texts = {
  story: {
    body: 'Lorem ipsum dolor sit amet consectetur. Purus vulputate scele risque tellus massa purus velit. In ullamcorper gravida ut morbimet diam nisl gravida porttitor neque.',
    path: '/our-story'
  },
  process: {
    body: 'Lorem ipsum dolor sit amet consectetur. Purus vulputate scele risque tellus massa purus velit. In ullamcorper gravida ut morbimet diam nisl gravida porttitor neque.',
    path: '/our-process'
  }
};

const OurStory = ({
  children,
  type
}) => (
  <div className={`our-${type}-static`}>
    <div className='container'>
      <div className='inner-container'>
        <div className='content'>
          <h5>
            {texts[type].path}
          </h5>
          <div className='title'>
            <h2>
              {children}
            </h2>
          </div>
          <div className='text'>
            <p>
              {texts[type].body}
            </p>
          </div>
          <div className='btn-container'>
            <button className='btn btn-secondary'>
              Find out more
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OurStory;
