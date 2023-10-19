import React from 'react';
import {useTranslation} from 'react-i18next';
import {NAMESPACE} from '../../data/constants';
import {isHuddle, isPrime} from '../../services/helper';

import HuddleLogo from '../../static/huddle/logo.svg';
import UnitasLogo from '../../static/unitas/logo.svg';
import PrimeLogo from '../../static/prime/logo.svg';
import Image1 from '../../static/huddle/origin-story-1.jpg';
import Image2 from '../../static/huddle/origin-story-2.jpg';
import Image3 from '../../static/huddle/origin-story-3.jpg';

const LOGOS = {
  huddle: HuddleLogo,
  unitas: UnitasLogo,
  prime: PrimeLogo
}

const OriginStory = () => {
  const {t} = useTranslation(['huddle', 'unitas', 'prime']);

  return (
    <div className='origin-story'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='title'>
              <h2>
                {t(`${NAMESPACE}:originStory:title`)}
              </h2>
            </div>
            <div className='story story-1'>
              <div className='text-container'>
                <p>
                  {t(`${NAMESPACE}:originStory:intro`)}
                </p>
                {(isHuddle || isPrime) && <br />}
                <p>
                  {t(`${NAMESPACE}:originStory:part1:text`)}
                </p>
                <br />
                <h6>
                  {t(`${NAMESPACE}:originStory:part2:title`)}
                </h6>
                <br />
                <p>
                  {t(`${NAMESPACE}:originStory:part2:text`)}
                </p>
              </div>
              <div className='img-container'>
                <div>
                  <img alt='origin-img-1' src={Image1} />
                </div>
              </div>
            </div>
            <div className='quote'>
              <h3>
                {t(`${NAMESPACE}:originStory:quote1`)}
              </h3>
            </div>
            <div className='story story-2'>
              <div className='img-container'>
                <div>
                  <img alt='origin-img-2' src={Image2} />
                </div>
              </div>
              <div className='text-container'>
                <h6>
                  {t(`${NAMESPACE}:originStory:part3:title`)}
                </h6>
                <br />
                <p>
                  {t(`${NAMESPACE}:originStory:part3:text`)}
                </p>
                <br />
                <h6>
                  {t(`${NAMESPACE}:originStory:part4:title`)}
                </h6>
                <br />
                <p>
                  {t(`${NAMESPACE}:originStory:part4:text`)}
                </p>
              </div>
            </div>
            {(isHuddle || isPrime) && (
              <div className='quote'>
                <h3>
                  {t(`${NAMESPACE}:originStory:quote2`)}
                </h3>
              </div>
            )}
            <div className='story story-3'>
              <div className='text-container'>
                <h6>
                  {t(`${NAMESPACE}:originStory:part5:title`)}
                </h6>
                <br />
                <p>
                  {t(`${NAMESPACE}:originStory:part5:text`)}
                </p>
                <br />
                <h6>
                  {t(`${NAMESPACE}:originStory:part6:title`)}
                </h6>
                <br />
                <p>
                  {t(`${NAMESPACE}:originStory:part6:text`)}
                </p>
                <br />
                <p>
                  {t(`${NAMESPACE}:originStory:part7:text`)}
                </p>
              </div>
              <div className='img-container'>
                <div>
                  <img alt='specialist-img' src={Image3} />
                </div>
              </div>
            </div>
            <img
              alt='logo'
              className='logo'
              src={LOGOS[NAMESPACE]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OriginStory;
