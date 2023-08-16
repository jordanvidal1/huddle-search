import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Grid} from '@material-ui/core';
import {getNamespace} from '../../services/helper';

import InfoBox from './InfoBox';
import InfoIcon1 from '../../static/huddle/info-icon-1.svg';
import InfoIcon2 from '../../static/huddle/info-icon-2.svg';
import InfoIcon3 from '../../static/huddle/info-icon-3.svg';
import InfoIcon4 from '../../static/huddle/info-icon-4.svg';

const EmbeddedTalent = () => {
  const {t} = useTranslation(['huddle', 'unitas']);

  return (
    <div className='embedded-talent'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='title'>
              <h2>
                <a>Embedded</a> Talent Solutions
              </h2>
            </div>
            <div className='text'>
              <p>
                {t(`${getNamespace}:embeddedTalent:desc`)}
              </p>
            </div>
            <Grid container spacing={2} className='grid-container'>
              <InfoBox
                icon={InfoIcon1}
                title={t(`${getNamespace}:embeddedTalent:info:1:title`)}
                text={t(`${getNamespace}:embeddedTalent:info:1:text`)}
              />
              <InfoBox
                icon={InfoIcon2}
                title={t(`${getNamespace}:embeddedTalent:info:2:title`)}
                text={t(`${getNamespace}:embeddedTalent:info:2:text`)}
              />
              <InfoBox
                icon={InfoIcon3}
                title={t(`${getNamespace}:embeddedTalent:info:3:title`)}
                text={t(`${getNamespace}:embeddedTalent:info:3:text`)}
              />
              <InfoBox
                icon={InfoIcon4}
                title={t(`${getNamespace}:embeddedTalent:info:4:title`)}
                text={t(`${getNamespace}:embeddedTalent:info:4:text`)}
              />
            </Grid>
            <div className='btn-container'>
              <Link to='/embedded-talent-solutions' className="btn btn-secondary">
                {t(`${getNamespace}:embeddedTalent:button`)}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmbeddedTalent;
