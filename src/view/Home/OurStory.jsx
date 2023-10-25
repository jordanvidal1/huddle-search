import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {capitalize} from '@material-ui/core';
import {NAMESPACE} from '../../data/constants';

import OurStoryImg from '../../static/prime/origin-story-1.jpg';
import OurProcessImg from '../../static/prime/our-process-home.jpg';

const IMAGES = {
  story: OurStoryImg,
  process: OurProcessImg
};

const OurStory = ({type}) => {
  const {t} = useTranslation(['huddle', 'unitas', 'prime']);

  return (
    <div className={`our-${type}-home`}>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='text-container'>
              <h6>
                {t(`${NAMESPACE}:thePrimeGroup:our${capitalize(type)}:path`)}
              </h6>
              <h3>
                {t(`${NAMESPACE}:thePrimeGroup:our${capitalize(type)}:title`)}
              </h3>
              <p>
                {t(`${NAMESPACE}:thePrimeGroup:our${capitalize(type)}:desc`)}
              </p>
              <Link to={`/our-${type}`} className='btn btn-secondary'>
                {t(`${NAMESPACE}:thePrimeGroup:our${capitalize(type)}:button`)}
              </Link>
            </div>
            <div className='img-container'>
              <img alt='img' src={IMAGES[type]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
