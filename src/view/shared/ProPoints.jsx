import React from 'react';
import {useTranslation} from 'react-i18next';
import {Grid} from '@material-ui/core';
import ProIcon1 from '../../static/pro-icon-1.svg';
import ProIcon2 from '../../static/pro-icon-2.svg';
import ProIcon3 from '../../static/pro-icon-3.svg';
import ProIcon4 from '../../static/pro-icon-4.svg';

const ProPoints = props => {
  const {type} = props;

  const {t} = useTranslation(['huddle']);

  return (
    <div className='pro-points'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='text-container'>
              <div className='title'>
                <h2>
                  {t(`huddle:proPoints:${type}:title`)}
                </h2>
              </div>
              <div className='text'>
                <span>
                  {t(`huddle:proPoints:${type}:desc`)}
                </span>
              </div>
            </div>
            <div className='pro-point-container'>
              <Grid container spacing={4} justifyContent='space-around' align='center'>
                <Grid item xs={12} sm={6} md={4}>
                  <div className='pro-point'>
                    <img alt='pro-point-icon-1' src={ProIcon1} />
                    <h5>
                      {t(`huddle:proPoints:${type}:points:1:title`)}
                    </h5>
                    <span>
                      {t(`huddle:proPoints:${type}:points:1:text`)}
                    </span>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <div className='pro-point'>
                    <img alt='pro-point-icon-2' src={ProIcon2} />
                    <h5>
                      {t(`huddle:proPoints:${type}:points:2:title`)}
                    </h5>
                    <span>
                      {t(`huddle:proPoints:${type}:points:2:text`)}
                    </span>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <div className='pro-point'>
                    <img alt='pro-point-icon-3' src={ProIcon3} />
                    <h5>
                      {t(`huddle:proPoints:${type}:points:3:title`)}
                    </h5>
                    <span>
                      {t(`huddle:proPoints:${type}:points:3:text`)}
                    </span>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <div className='pro-point'>
                    <img alt='pro-point-icon-4' src={ProIcon4} />
                    <h5>
                      {t(`huddle:proPoints:${type}:points:4:title`)}
                    </h5>
                    <span>
                      {t(`huddle:proPoints:${type}:points:4:text`)}
                    </span>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <div className='pro-point'>
                    <img alt='pro-point-icon-5' src={ProIcon1} />
                    <h5>
                      {t(`huddle:proPoints:${type}:points:5:title`)}
                    </h5>
                    <span>
                      {t(`huddle:proPoints:${type}:points:5:text`)}
                    </span>
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
