import React from 'react';
import {NAMESPACE} from '../../data/constants';

import {ReactComponent as LinkedIn} from '../../static/icons/linkedin.svg';

const Share = ({t}) => (
  <div className='resource-share'>
    <div className='share-text'>
      <h5>{t(`${NAMESPACE}:jobResource:share:resource:title`)}</h5>
      <span>{t(`${NAMESPACE}:jobResource:share:resource:text`)}</span>
    </div>
    <div className='socials'>
      <a href='#' rel='noreferrer' target='_blank'>
        <LinkedIn />
      </a>
    </div>
  </div>
);

export default Share;
