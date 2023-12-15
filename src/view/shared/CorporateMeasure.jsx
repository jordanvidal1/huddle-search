import React from 'react';
import {useTranslation} from 'react-i18next';
import {NAMESPACE} from '../../data/constants';
import {isHuddle} from '../../services/helper';

import HuddleCorporateHero from '../../static/huddle/contract-hires.png';
import HuddleDiversityHero from '../../static/huddle/contract-hires.png';
import UnitasCorporateHero from '../../static/unitas/corporate.png';
import UnitasDiversityHero from '../../static/unitas/corporate.png';

const IMAGES = {
  huddle: {
    corporate: HuddleCorporateHero,
    diversity: HuddleDiversityHero
  },
  unitas: {
    corporate: UnitasCorporateHero,
    diversity: UnitasDiversityHero
  }
};

const CorporateMeasure = ({type}) => {
  const {t} = useTranslation(['huddle', 'unitas', 'prime']);

  return (
    <div className='corporate-measure'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            {isHuddle && (
              <img alt='hero-img' src={IMAGES[NAMESPACE][type]} />
            )}
            <div className='title'>
              <h2>
                {t(`${NAMESPACE}:corporateMeasure:${type}:title:part1`)}
                <a>
                  {t(`${NAMESPACE}:corporateMeasure:${type}:title:part2`)}
                </a>
                {t(`${NAMESPACE}:corporateMeasure:${type}:title:part3`)}
              </h2>
            </div>
            <div className='text'>
              <p>
                {t(`${NAMESPACE}:corporateMeasure:${type}:desc`)}
              </p>
            </div>
            <div className='plan-container'>
              <div className='text-container'>
                <h5>
                  {t(`${NAMESPACE}:corporateMeasure:${type}:plan:title`)}
                </h5>
                <ol>
                  <li>
                    <h6>
                      {t(`${NAMESPACE}:corporateMeasure:${type}:plan:1:title`)}
                    </h6>
                    <span>
                      {t(`${NAMESPACE}:corporateMeasure:${type}:plan:1:text`)}
                    </span>
                  </li>
                  <li>
                    <h6>
                      {t(`${NAMESPACE}:corporateMeasure:${type}:plan:2:title`)}
                    </h6>
                    <span>
                      {t(`${NAMESPACE}:corporateMeasure:${type}:plan:2:text`)}
                    </span>
                  </li>
                  <li>
                    <h6>
                      {t(`${NAMESPACE}:corporateMeasure:${type}:plan:3:title`)}
                    </h6>
                    <span>
                      {t(`${NAMESPACE}:corporateMeasure:${type}:plan:3:text`)}
                    </span>
                  </li>
                </ol>
                <p>
                </p>
              </div>
            </div>
            <div className='text'>
              <p>
                {t(`${NAMESPACE}:corporateMeasure:${type}:desc2`)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CorporateMeasure;
