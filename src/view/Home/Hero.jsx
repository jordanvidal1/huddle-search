import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {NAMESPACE} from '../../data/constants';
import {isHuddle} from '../../services/helper';
import HeroImg from '../../static/unitas/home-hero.png';

const Hero = () => {
  const {t} = useTranslation(['huddle', 'unitas', 'prime']);

  return (
    <div className='hero'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='text-container'>
              {!isHuddle && <img alt='hero-img' src={HeroImg} />}
              <div className='title'>
                <h1>
                  {t(`${NAMESPACE}:home:hero:title:part1`)}
                  <a>
                    {t(`${NAMESPACE}:home:hero:title:part2`)}
                  </a>
                  {t(`${NAMESPACE}:home:hero:title:part3`)}
                </h1>
              </div>
              <div className='text'>
                <p>
                  {t(`${NAMESPACE}:home:hero:desc`)}
                </p>
              </div>
              <div className='btn-container'>
                <Link to='/our-story' className="btn btn-primary">
                  {t(`${NAMESPACE}:home:hero:button`)}
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
