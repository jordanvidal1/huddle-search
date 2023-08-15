import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

const Hero = () => {
  const {t} = useTranslation(['huddle', 'unitas']);

  return (
    <div className='hero'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='text-container'>
              <div className='title'>
                <h1>
                  {t(`${window.SITE_NAME}:home:hero:title:part1`)}
                  <a>
                    {t(`${window.SITE_NAME}:home:hero:title:part2`)}
                  </a>
                  {t(`${window.SITE_NAME}:home:hero:title:part3`)}
                </h1>
              </div>
              <div className='text'>
                <p>
                  {t(`${window.SITE_NAME}:home:hero:desc`)}
                </p>
              </div>
              <div className='btn-container'>
                <Link to='/jobs' className="btn btn-primary">
                  {t(`${window.SITE_NAME}:home:hero:button`)}
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
