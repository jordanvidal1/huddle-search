import React from 'react';
import {useTranslation} from 'react-i18next';
import {Grid} from '@material-ui/core';
import {NAMESPACE} from '../../data/constants';
import {isHuddle} from "../../services/helper";

import PermanentIcon1 from '../../static/icons/permanent-hires-1.svg';
import PermanentIcon2 from '../../static/icons/permanent-hires-2.svg';
import PermanentIcon3 from '../../static/icons/permanent-hires-3.svg';
import PermanentIcon4 from '../../static/icons/permanent-hires-4.svg';
import PermanentIcon5 from '../../static/icons/permanent-hires-5.svg';

import ExecutiveIcon1 from '../../static/icons/executive-search-1.svg';
import ExecutiveIcon2 from '../../static/icons/executive-search-2.svg';
import ExecutiveIcon3 from '../../static/icons/executive-search-3.svg';
import ExecutiveIcon4 from '../../static/icons/executive-search-4.svg';

import EmbeddedIcon1 from '../../static/icons/embedded-talent-1.svg';
import EmbeddedIcon2 from '../../static/icons/embedded-talent-2.svg';
import EmbeddedIcon3 from '../../static/icons/embedded-talent-3.svg';
import EmbeddedIcon4 from '../../static/icons/embedded-talent-4.svg';

import ContractIcon1 from '../../static/icons/contract-interim-1.svg';
import ContractIcon2 from '../../static/icons/contract-interim-2.svg';
import ContractIcon3 from '../../static/icons/contract-interim-3.svg';
import ContractIcon4 from '../../static/icons/contract-interim-4.svg';

import OurStoryIcon1 from '../../static/icons/our-story-1.svg';
import OurStoryIcon2 from '../../static/icons/our-story-2.svg';
import OurStoryIcon3 from '../../static/icons/our-story-3.svg';
import OurStoryIcon4 from '../../static/icons/our-story-4.svg';
import OurStoryIcon5 from '../../static/icons/our-story-5.svg';

import OurProcessIcon1 from '../../static/icons/our-process-1.svg';
import OurProcessIcon2 from '../../static/icons/our-process-2.svg';
import OurProcessIcon3 from '../../static/icons/our-process-3.svg';
import OurProcessIcon4 from '../../static/icons/our-process-4.svg';
import OurProcessIcon5 from '../../static/icons/our-process-5.svg';

import CSRIcon1 from '../../static/icons/csr-1.svg';
import CSRIcon2 from '../../static/icons/csr-2.svg';
import CSRIcon3 from '../../static/icons/csr-3.svg';
import CSRIcon4 from '../../static/icons/csr-4.svg';
import CSRIcon5 from '../../static/icons/csr-5.svg';

import DEIIcon1 from '../../static/icons/dei-1.svg';
import DEIIcon2 from '../../static/icons/dei-2.svg';
import DEIIcon3 from '../../static/icons/dei-3.svg';
import DEIIcon4 from '../../static/icons/dei-4.svg';
import DEIIcon5 from '../../static/icons/dei-5.svg';

const ICONS = {
  permanentHires: [
    PermanentIcon1,
    PermanentIcon2,
    PermanentIcon3,
    PermanentIcon4,
    isHuddle ? PermanentIcon5 : null
  ],
  executiveSearch: [
    ExecutiveIcon1,
    ExecutiveIcon2,
    ExecutiveIcon3,
    ExecutiveIcon4
  ],
  embeddedTalent: [
    EmbeddedIcon1,
    EmbeddedIcon2,
    EmbeddedIcon3,
    EmbeddedIcon4
  ],
  contractInterim: [
    ContractIcon1,
    ContractIcon2,
    ContractIcon3,
    ContractIcon4
  ],
  ourStory: [
    OurStoryIcon1,
    OurStoryIcon2,
    OurStoryIcon3,
    OurStoryIcon4,
    OurStoryIcon5
  ],
  ourProcess: [
    OurProcessIcon1,
    OurProcessIcon2,
    OurProcessIcon3,
    OurProcessIcon4,
    isHuddle ? OurProcessIcon5 : null
  ],
  corporate: [
    CSRIcon1,
    CSRIcon2,
    CSRIcon3,
    CSRIcon4,
    CSRIcon5
  ],
  diversity: [
    DEIIcon1,
    DEIIcon2,
    DEIIcon3,
    DEIIcon4,
    DEIIcon5
  ]
}

const ProPoints = ({type}) => {
  const {t} = useTranslation(['huddle', 'unitas', 'prime']);

  return (
    <div className='pro-points'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='text-container'>
              <div className='title'>
                <h2>
                  {t(`${NAMESPACE}:proPoints:${type}:title`)}
                </h2>
              </div>
              <div className='text'>
                <p>
                  {t(`${NAMESPACE}:proPoints:${type}:desc`)}
                </p>
              </div>
            </div>
            <div className='pro-point-container'>
              <Grid container spacing={8} justifyContent='center' align='center'>
                <Grid item xs={12}>
                  <div className='pro-point'>
                    <div className='pro-point-icon'>
                      <img alt='pro-point-icon-1' src={ICONS[type][0]} />
                    </div>
                    <h5>
                      {t(`${NAMESPACE}:proPoints:${type}:points:1:title`)}
                    </h5>
                    <p>
                      {t(`${NAMESPACE}:proPoints:${type}:points:1:text`)}
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className='pro-point'>
                    <div className='pro-point-icon'>
                      <img alt='pro-point-icon-2' src={ICONS[type][1]} />
                    </div>
                    <h5>
                      {t(`${NAMESPACE}:proPoints:${type}:points:2:title`)}
                    </h5>
                    <p>
                      {t(`${NAMESPACE}:proPoints:${type}:points:2:text`)}
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className='pro-point'>
                    <div className='pro-point-icon'>
                      <img alt='pro-point-icon-3' src={ICONS[type][2]} />
                    </div>
                    <h5>
                      {t(`${NAMESPACE}:proPoints:${type}:points:3:title`)}
                    </h5>
                    <p>
                      {t(`${NAMESPACE}:proPoints:${type}:points:3:text`)}
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className='pro-point'>
                    <div className='pro-point-icon'>
                      <img alt='pro-point-icon-4' src={ICONS[type][3]} />
                    </div>
                    <h5>
                      {t(`${NAMESPACE}:proPoints:${type}:points:4:title`)}
                    </h5>
                    <p>
                      {t(`${NAMESPACE}:proPoints:${type}:points:4:text`)}
                    </p>
                  </div>
                </Grid>
                {ICONS[type][4] && (
                  <Grid item xs={12}>
                    <div className='pro-point'>
                      <div className='pro-point-icon'>
                        <img alt='pro-point-icon-5' src={ICONS[type][4]} />
                      </div>
                      <h5>
                        {t(`${NAMESPACE}:proPoints:${type}:points:5:title`)}
                      </h5>
                      <p>
                        {t(`${NAMESPACE}:proPoints:${type}:points:5:text`)}
                      </p>
                    </div>
                  </Grid>
                )}
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProPoints;
