import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import {useTranslation} from 'react-i18next';
import {NAMESPACE} from '../../data/constants';
import {isHuddle} from '../../services/helper';

import HomeHero from '../../static/huddle/home-looking-to-hire.png';
import PermanentHero from '../../static/huddle/permanent-hires.png';

import {ReactComponent as Arrow} from '../../static/icons/arrow.svg';

const LookingToHire = ({type}) => {
  const {t} = useTranslation(['huddle', 'unitas', 'prime']);

  const heroImg = type === 'home' ? HomeHero : PermanentHero;

  return (
    <div className='looking-to-hire'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            {isHuddle && (
              <img alt='hero-img' src={heroImg} />
            )}
            <div className='title'>
              <h2>
                {t(`${NAMESPACE}:lookingToHire:${type}:title:part1`)}
                <a>
                  {t(`${NAMESPACE}:lookingToHire:${type}:title:part2`)}
                </a>
                {t(`${NAMESPACE}:lookingToHire:${type}:title:part3`)}
              </h2>
            </div>
            <div className='text'>
              <p>
                {t(`${NAMESPACE}:lookingToHire:${type}:desc`)} {
                  type === 'home' && (
                    <Link to='/looking-to-hire'>
                      {t(`${NAMESPACE}:lookingToHire:${type}:link`)}
                      <Arrow />
                    </Link>
                )}
              </p>
            </div>
            <div className='btn-container'>
              <HashLink to='/contact-us#contact' className="btn btn-secondary">
                Submit new role
              </HashLink>
              <HashLink to='/contact-us#contact' className="btn">
                Talk to us
              </HashLink>
            </div>
            <div className='cv-container'>
              <div className='text-container'>
                <h5>
                  {t(`${NAMESPACE}:lookingToHire:${type}:cv:title`)}
                </h5>
                <p>
                  {t(`${NAMESPACE}:lookingToHire:${type}:cv:text`)}
                </p>
              </div>
              <div className='link-container'>
                <HashLink to='/contact-us#contact'>
                  {t(`${NAMESPACE}:lookingToHire:${type}:cv:link`)}
                  <Arrow />
                </HashLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LookingToHire;
