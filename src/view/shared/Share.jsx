import React from 'react';
import {NAMESPACE} from '../../data/constants';

const Share = ({t, icon}) => (
  <div className='resource-share'>
    <div className='share-text'>
      <h5>{t(`${NAMESPACE}:jobResource:share:resource:title`)}</h5>
      <span>{t(`${NAMESPACE}:jobResource:share:resource:text`)}</span>
    </div>
    <div className='socials'>
      <a href='#' rel='noreferrer' target='_blank'>
        <img alt='linkedin' src={icon} />
      </a>
    </div>
  </div>
);

export default Share;
