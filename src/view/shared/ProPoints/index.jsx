import React from 'react';
import {Grid} from '@material-ui/core';
import ProIcon1 from '../../../static/pro-icon-1.svg';
import ProIcon2 from '../../../static/pro-icon-2.svg';
import ProIcon3 from '../../../static/pro-icon-3.svg';
import ProIcon4 from '../../../static/pro-icon-4.svg';
import ProIcon5 from '../../../static/pro-icon-5.svg';
import './styles.scss';


// const elements = {
//   leadership: {
//     text: 'Lorem ipsum dolor sit amet consectetur. Nibh bibendum tempor lorem a non mauris hendrerit mauris. Vitae cursus orci vulputate condimentum.',
//     path: '/leadership-team',
//     infoComponent: leadershipComponent()
//   },
//   story: {
//     path: '/our-story',
//     text: 'Lorem ipsum dolor sit amet consectetur. Nibh bibendum tempor lorem a non mauris hendrerit mauris. Vitae cursus orci vulputate condimentum.',
//     infoComponent: ourStoryComponent()
//   },
//   process: {
//     path: '/our-process',
//     text: 'Lorem ipsum dolor sit amet consectetur. Nibh bibendum tempor lorem a non mauris hendrerit mauris. Vitae cursus orci vulputate condimentum.',
//     infoComponent: ourProcessComponent()
//   }
// };

const ProPoints = props => {
  const {children, type} = props;

  return (
    <div className='pro-points'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='text-container'>
              <div className='title'>
                <h2>
                  Values that make us who we are
                </h2>
              </div>
              <div className='text'>
                <span>
                  Lorem ipsum dolor sit amet consectetur. Ultrices sed dignissim nibh feugiat mauris pellentesque.
                </span>
              </div>
            </div>
            <div className='pro-point-container'>
              <Grid container spacing={4} justify='space-around' align='center'>
                <Grid item xs={4}>
                  <div className='pro-point'>
                    <img alt='pro-point-icon-1' src={ProIcon1} />
                    <h5>
                      Tortor est ipsum
                    </h5>
                    <span>
                      Lorem ipsum dolor sit amet conse tetur. Morbi curs usamet habit asse nisl est rhoncus lorem ipsum.
                    </span>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className='pro-point'>
                    <img alt='pro-point-icon-2' src={ProIcon2} />
                    <h5>
                      Tortor est ipsum
                    </h5>
                    <span>
                      Lorem ipsum dolor sit amet conse tetur. Morbi curs usamet habit asse nisl est rhoncus lorem ipsum.
                    </span>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className='pro-point'>
                    <img alt='pro-point-icon-3' src={ProIcon3} />
                    <h5>
                      Tortor est ipsum
                    </h5>
                    <span>
                      Lorem ipsum dolor sit amet conse tetur. Morbi curs usamet habit asse nisl est rhoncus lorem ipsum.
                    </span>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className='pro-point'>
                    <img alt='pro-point-icon-4' src={ProIcon4} />
                    <h5>
                      Tortor est ipsum
                    </h5>
                    <span>
                      Lorem ipsum dolor sit amet conse tetur. Morbi curs usamet habit asse nisl est rhoncus lorem ipsum.
                    </span>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className='pro-point'>
                    <img alt='pro-point-icon-5' src={ProIcon5} />
                    <h5>
                      Tortor est ipsum
                    </h5>
                    <span>
                      Lorem ipsum dolor sit amet conse tetur. Morbi curs usamet habit asse nisl est rhoncus lorem ipsum.
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
