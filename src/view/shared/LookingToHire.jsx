import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {getNamespace, isHuddle} from '../../services/helper';

import ArrowIcon from '../../static/huddle/arrow.svg';
import UnitasArrowIcon from '../../static/unitas/arrow.svg';
import UnitasRequestArrowIcon from '../../static/unitas/request-arrow.svg';

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
                {t(`${getNamespace}:lookingToHire:${type}:desc`)} {
                  type === 'home' && (
                    <Link to='/looking-to-hire'>
                      {t(`${getNamespace}:lookingToHire:${type}:link`)}
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
                  {t(`${getNamespace}:lookingToHire:${type}:cv:title`)}
                </h5>
                <p>
                  {t(`${getNamespace}:lookingToHire:${type}:cv:text`)}
                </p>
              </div>
              <div className='link-container'>
                <a>
                  {t(`${getNamespace}:lookingToHire:${type}:cv:link`)}
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
