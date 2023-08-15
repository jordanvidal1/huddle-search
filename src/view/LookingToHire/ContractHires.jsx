import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

const ContractHires = () => {
  const {t} = useTranslation(['huddle', 'unitas']);

  return (
    <div className='contract-hires'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='title'>
              <h2>
                <a>Contract</a> hires to deliver your project
              </h2>
            </div>
            <div className='text'>
              <p>
                {t(`${window.SITE_NAME}:lookingToHire:contract:desc`)}
              </p>
            </div>
            <div className='btn-container'>
              <Link to='/contract-interim' className="btn btn-secondary">
                {t(`${window.SITE_NAME}:lookingToHire:contract:button`)}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContractHires;
