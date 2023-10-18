import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {capitalize} from '@material-ui/core';
import {NAMESPACE} from '../../data/constants';

const OurStory = ({
  children,
  type
}) => {
  const {t} = useTranslation(['huddle', 'unitas', 'prime']);

  return (
    <div className={`our-${type}-static`}>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <h5>
              {t(`${NAMESPACE}:leadershipHero:our${capitalize(type)}:path`)}
            </h5>
            <div className='title'>
              <h2>
                {children}
              </h2>
            </div>
            <div className='text'>
              <p>
                {t(`${NAMESPACE}:leadershipHero:our${capitalize(type)}:desc`)}
              </p>
            </div>
            <div className='btn-container'>
              <Link to={`/our-${type}`} className='btn btn-secondary'>
                {t(`${NAMESPACE}:leadershipHero:our${capitalize(type)}:button`)}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
