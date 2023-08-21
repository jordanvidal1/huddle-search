import React from 'react';
import {NAMESPACE} from '../../data/constants';
import LinkedIn from '../../static/huddle/linkedin.svg';

const Share = props => {
  const {t} = props;

  return (
    <div className='resource-share'>
      <div className='share-text'>
        <h5>{t(`${NAMESPACE}:jobResource:share:resource:title`)}</h5>
        <span>{t(`${NAMESPACE}:jobResource:share:resource:text`)}</span>
      </div>
      <div className='socials'>
        <a href='#' rel='noreferrer' target='_blank'>
          <img alt='linkedin' src={LinkedIn} />
        </a>
      </div>
    </div>
  );
}

export default Share;
