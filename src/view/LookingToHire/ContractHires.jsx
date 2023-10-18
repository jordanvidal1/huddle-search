import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {NAMESPACE} from '../../data/constants';
import {isHuddle} from '../../services/helper';

import HeroImg from '../../static/huddle/contract-hires.png';

const ContractHires = () => {
  const {t} = useTranslation(['huddle', 'unitas', 'prime']);

  return (
    <div className='contract-hires'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            {isHuddle && (
              <img alt='hero-img' src={HeroImg} />
            )}
            <div className='title'>
              <h2>
                <a>
                  {t(`${NAMESPACE}:lookingToHire:contract:title:part1`)}
                </a>
                {t(`${NAMESPACE}:lookingToHire:contract:title:part2`)}
              </h2>
            </div>
            <div className='text'>
              <p>
                {t(`${NAMESPACE}:lookingToHire:contract:desc`)}
              </p>
            </div>
            <div className='btn-container'>
              <Link to='/contract-interim' className="btn btn-secondary">
                {t(`${NAMESPACE}:lookingToHire:contract:button`)}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContractHires;
