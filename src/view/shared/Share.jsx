import React from 'react';
import {NAMESPACE} from '../../data/constants';

const Share = props => {
  const {t} = props;

  return (
    <div className='resource-share'>
      <div className='share-text'>
        <h5>{t(`${NAMESPACE}:jobResource:share:resource:title`)}</h5>
        <span>{t(`${NAMESPACE}:jobResource:share:resource:text`)}</span>
      </div>
    </div>
  );
}

export default Share;
