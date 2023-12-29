import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Grid} from '@material-ui/core';
import {NAMESPACE} from '../../data/constants';
import {isHuddle} from '../../services/helper';

import HeroImg from '../../static/huddle/embedded-talent.png';
import InfoBox from './InfoBox';

import {ReactComponent as Icon1} from '../../static/icons/embedded-talent-1.svg';
import {ReactComponent as Icon2} from '../../static/icons/embedded-talent-2.svg';
import {ReactComponent as Icon3} from '../../static/icons/embedded-talent-3.svg';
import {ReactComponent as Icon4} from '../../static/icons/embedded-talent-4.svg';

const EmbeddedTalent = () => {
  const {t} = useTranslation(['huddle', 'unitas', 'prime']);

  return (
    <div className='embedded-talent'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            {isHuddle && (
              <img alt='hero-img' src={HeroImg} />
            )}
            <div className='title'>
              <h2>
                <a>Embedded</a> Talent Solutions
              </h2>
            </div>
            <div className='text'>
              <p>
                {t(`${NAMESPACE}:embeddedTalent:desc`)}
              </p>
            </div>
            <Grid container spacing={2} className='grid-container'>
              <InfoBox
                title={t(`${NAMESPACE}:embeddedTalent:info:1:title`)}
                text={t(`${NAMESPACE}:embeddedTalent:info:1:text`)}
              >
                <Icon1 />
              </InfoBox>
              <InfoBox
                title={t(`${NAMESPACE}:embeddedTalent:info:2:title`)}
                text={t(`${NAMESPACE}:embeddedTalent:info:2:text`)}
              >
                <Icon2 />
              </InfoBox>
              <InfoBox
                title={t(`${NAMESPACE}:embeddedTalent:info:3:title`)}
                text={t(`${NAMESPACE}:embeddedTalent:info:3:text`)}
              >
                <Icon3 />
              </InfoBox>
              <InfoBox
                title={t(`${NAMESPACE}:embeddedTalent:info:4:title`)}
                text={t(`${NAMESPACE}:embeddedTalent:info:4:text`)}
              >
                <Icon4 />
              </InfoBox>
            </Grid>
            <div className='btn-container'>
              <Link to='/embedded-talent-solutions' className="btn btn-secondary">
                {t(`${NAMESPACE}:embeddedTalent:button`)}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmbeddedTalent;
