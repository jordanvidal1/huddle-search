import React from 'react';
import {useTranslation} from 'react-i18next';
import {NAMESPACE} from '../../data/constants';

const PrivacyPolicy = () => {
  const {t} = useTranslation(['huddle', 'unitas']);

  console.log('text', t(`${NAMESPACE}:privacy:text`));

  return (
    <div className='legal privacy-policy'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='title'>
              <h2>
                {t(`${NAMESPACE}:privacy:title`)}
              </h2>
            </div>
            <div
              className='text'
              dangerouslySetInnerHTML={{ __html: t(`${NAMESPACE}:privacy:text`) }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;