import React from 'react';
import {LEADERS, NAMESPACE} from '../../data/constants';

import {ReactComponent as Phone} from '../../static/icons/phone.svg';
import {ReactComponent as Email} from '../../static/icons/email.svg';
import {ReactComponent as LinkedIn} from '../../static/icons/linkedin-sm.svg';

const Leaders = () => (
  <div className='leaders'>
    <div className='container'>
      <div className='inner-container'>
        <div className='content'>
          {LEADERS[NAMESPACE].map((leader, i) => {
            const {
              leaderImg,
              name,
              role,
              description,
              number,
              email,
              linkedin
            } = leader;

            return (
              <div key={i} className='leader'>
                <div className='text-container'>
                  <div className='title'>
                    <h2>{name}</h2>
                  </div>
                  <div className='role'>
                    <span>{role}</span>
                  </div>
                  <div className='text'>
                    <p>{description}</p>
                  </div>
                  <div className='leader-contact'>
                    {number && (
                      <div>
                        <a href={`tel:${number}`}>
                          <Phone />
                          <span>{number}</span>
                        </a>
                      </div>
                    )}
                    <div>
                      <a href={`mailto:${email}`}>
                        <Email />
                        <span>{email}</span>
                      </a>
                    </div>
                    <div>
                      <a href={linkedin} rel='noreferrer' target='_blank'>
                        <LinkedIn />
                        <span>LinkedIn profile</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='img-container'>
                  <div>
                    <img src={leaderImg} alt='specialist-img' />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </div>
);

export default Leaders;
