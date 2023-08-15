import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import ArrowIcon from '../../static/huddle/arrow.svg';
import UnitasArrowIcon from '../../static/unitas/arrow.svg';
import UnitasRequestArrowIcon from '../../static/unitas/request-arrow.svg';

const isHuddle = window.HUDDLE;

const LookingToHire = ({
  children,
  type
}) => {
  const {t} = useTranslation(['huddle', 'unitas']);

  return (
    <div className='looking-to-hire'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='title'>
              <h2>
                {children}
              </h2>
            </div>
            <div className='text'>
              <p>
                {t(`${window.SITE_NAME}:lookingToHire:${type}:desc`)} {
                  type === 'home' && (
                    <Link to='/looking-to-hire'>
                      {t(`${window.SITE_NAME}:lookingToHire:${type}:link`)}
                      <img
                        className='arrow-icon'
                        alt='arrow-icon'
                        src={isHuddle ? ArrowIcon : UnitasArrowIcon}
                      />
                    </Link>
                )}
              </p>
            </div>
            <div className='btn-container'>
              <button className="btn btn-secondary">
                Submit new role
              </button>
              <Link to='/contact-us' className="btn">
                Talk to us
              </Link>
            </div>
            <div className='cv-container'>
              <div className='text-container'>
                <h5>
                  {t(`${window.SITE_NAME}:lookingToHire:${type}:cv:title`)}
                </h5>
                <p>
                  {t(`${window.SITE_NAME}:lookingToHire:${type}:cv:text`)}
                </p>
              </div>
              <div className='link-container'>
                <a>
                  {t(`${window.SITE_NAME}:lookingToHire:${type}:cv:link`)}
                  <img
                    alt='arrow-icon'
                    src={isHuddle ? ArrowIcon : UnitasRequestArrowIcon}
                  />
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
