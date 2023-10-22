import React from 'react';
import {LEADERS, NAMESPACE} from '../../data/constants';
import {isHuddle} from '../../services/helper';

import PhoneIcon from '../../static/huddle/phone-number.svg';
import EmailIcon from '../../static/huddle/email.svg';
import LinkedInIcon from '../../static/huddle/linkedin-pink.svg';
import UnitasPhoneIcon from '../../static/unitas/phone-number-white.svg';
import UnitasEmailIcon from '../../static/unitas/email-white.svg';
import UnitasLinkedInIcon from '../../static/unitas/linkedin-white.svg';

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
                        <img
                          alt='phone-number-icon'
                          src={isHuddle ? PhoneIcon : UnitasPhoneIcon}
                        />
                        <span>{number}</span>
                      </div>
                    )}
                    <div>
                      <a href={`mailto:${email}`}>
                        <img
                          alt='email-icon'
                          src={isHuddle ? EmailIcon : UnitasEmailIcon}
                        />
                        <span>{email}</span>
                      </a>
                    </div>
                    <div>
                      <a href={linkedin} rel='noreferrer' target='_blank'>
                        <img
                          alt='linkedin-icon'
                          src={isHuddle ? LinkedInIcon : UnitasLinkedInIcon}
                        />
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
