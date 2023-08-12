import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

const Hero = () => {
  const {t} = useTranslation(['huddle'])

  return (
    <div className='hero'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='text-container'>
              <div className='title'>
                <h1>
                  {t('huddle:home:hero:title')}
                </h1>
              </div>
              <div className='text'>
                <span>
                  {t('huddle:home:hero:desc')}
                </span>
              </div>
              <div className='btn-container'>
                <Link to='/jobs' className="btn btn-primary">
                  {t('huddle:home:hero:button')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
