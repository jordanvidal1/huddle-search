import React from 'react';
import {useTranslation} from 'react-i18next';
import {Grid} from '@material-ui/core';
import {NAMESPACE} from '../../data/constants';

import ProIcon1 from '../../static/huddle/pro-icon-1.svg';
import ProIcon2 from '../../static/huddle/pro-icon-2.svg';
import ProIcon3 from '../../static/huddle/pro-icon-3.svg';
import ProIcon4 from '../../static/huddle/pro-icon-4.svg';

const ProPoints = props => {
  const {type} = props;

  const {t} = useTranslation(['huddle', 'unitas']);

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
              <Grid container spacing={4} justifyContent='space-around' align='center'>
                <Grid item xs={12} sm={6} md={4}>
                  <div className='pro-point'>
                    <img alt='pro-point-icon-1' src={ProIcon1} />
                    <h5>
                      {t(`${NAMESPACE}:proPoints:${type}:points:1:title`)}
                    </h5>
                    <p>
                      {t(`${NAMESPACE}:proPoints:${type}:points:1:text`)}
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <div className='pro-point'>
                    <img alt='pro-point-icon-2' src={ProIcon2} />
                    <h5>
                      {t(`${NAMESPACE}:proPoints:${type}:points:2:title`)}
                    </h5>
                    <p>
                      {t(`${NAMESPACE}:proPoints:${type}:points:2:text`)}
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <div className='pro-point'>
                    <img alt='pro-point-icon-3' src={ProIcon3} />
                    <h5>
                      {t(`${NAMESPACE}:proPoints:${type}:points:3:title`)}
                    </h5>
                    <p>
                      {t(`${NAMESPACE}:proPoints:${type}:points:3:text`)}
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <div className='pro-point'>
                    <img alt='pro-point-icon-4' src={ProIcon4} />
                    <h5>
                      {t(`${NAMESPACE}:proPoints:${type}:points:4:title`)}
                    </h5>
                    <p>
                      {t(`${NAMESPACE}:proPoints:${type}:points:4:text`)}
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <div className='pro-point'>
                    <img alt='pro-point-icon-5' src={ProIcon1} />
                    <h5>
                      {t(`${NAMESPACE}:proPoints:${type}:points:5:title`)}
                    </h5>
                    <p>
                      {t(`${NAMESPACE}:proPoints:${type}:points:5:text`)}
                    </p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProPoints;
