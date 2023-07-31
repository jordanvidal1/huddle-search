import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../shared/Header';
import './styles.scss';

const Hero = () => (
  <div className='hero'>
    <div className='container'>
      <div className='inner-container'>
        <div className='content'>
          <Header />
          <div className='text-container'>
            <div className='title'>
              <h1>
                Because every search starts with a huddle
              </h1>
            </div>
            <div className='text'>
              <span>
                Lorem ipsum dolor sit amet consectetur. Morbi curs usamet habit asse nisl est rhoncus. Cursus amet habita sse nisl est rhoncus.
              </span>
            </div>
            <Link to='/jobs'>
              <button className="btn btn-primary">
                Browse all jobs
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
