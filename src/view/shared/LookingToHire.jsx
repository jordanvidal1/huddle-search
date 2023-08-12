import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import ArrowIcon from '../../static/arrow.svg';

const LookingToHire = ({
  children,
  type
}) => {
  const {t} = useTranslation(['huddle'])

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
              <span className='body'>
                {t(`huddle:lookingToHire:${type}:desc`)} <Link to='/looking-to-hire'>
                Find out more<img className='arrow-icon' alt='arrow-icon' src={ArrowIcon} />
              </Link>
              </span>
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
              <h5>
                {t(`huddle:lookingToHire:${type}:cv:title`)}
              </h5>
              <p>
                {t(`huddle:lookingToHire:${type}:cv:text`)}
              </p>
              <div className='link-container'>
                <a>
                  <span>{t(`huddle:lookingToHire:${type}:cv:link`)}<img alt='arrow-icon' src={ArrowIcon} /></span>
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
