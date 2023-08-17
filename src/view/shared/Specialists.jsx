import React from 'react';
import {useTranslation} from 'react-i18next';
import {leaders, NAMESPACE} from '../../services/constants'
import {isHuddle} from '../../services/helper';

import PhoneIcon from '../../static/huddle/phone-number.svg';
import EmailIcon from '../../static/huddle/email.svg';
import LinkedInIcon from '../../static/huddle/linkedin-pink.svg';
import ExecutivePhoneIcon from '../../static/huddle/phone-number-grey.svg';
import ExecutiveEmailIcon from '../../static/huddle/email-grey.svg';
import ExecutiveLinkedInIcon from '../../static/huddle/linkedin-grey.svg';

import UnitasPhoneIcon from '../../static/unitas/phone-number-white.svg';
import UnitasEmailIcon from '../../static/unitas/email-white.svg';
import UnitasLinkedInIcon from '../../static/unitas/linkedin-white.svg';

const Specialists = props => {
  const {type = 'leadership', name, specialists, executive} = props;

  const {t} = useTranslation(['huddle', 'unitas']);

  const huddlePhoneIcon = executive ? ExecutivePhoneIcon : PhoneIcon;
  const huddleEmailIcon = executive ? ExecutiveEmailIcon : EmailIcon;
  const huddleLinkedInIcon = executive ? ExecutiveLinkedInIcon : LinkedInIcon;

  const phoneIcon = isHuddle ? huddlePhoneIcon : UnitasPhoneIcon;
  const emailIcon = isHuddle ? huddleEmailIcon : UnitasEmailIcon;
  const linkedInIcon = isHuddle ? huddleLinkedInIcon : UnitasLinkedInIcon;

  return (
    <div className='specialists'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='text-container'>
              <div className='title'>
                <h2>
                  {t(`${NAMESPACE}:specialists:${type}:title`, {name})}
                </h2>
              </div>
              <div className='text'>
                <p>
                  {t(`${NAMESPACE}:specialists:${type}:desc`)}
                </p>
              </div>
            </div>
            <div className='specialists-container'>
              {(specialists || leaders).map((specialist, i) => {
                const {img, name, role, description, number, email, linkedin} = specialist;

                return (
                  <div key={i} className='specialist'>
                    <div className='specialist-img-container'>
                      <img alt='specialist-img' />
                    </div>
                    <div className='specialist-details'>
                      <h5>
                        {name}
                      </h5>
                      <span>
                        {role}
                      </span>
                      <p>
                        {description}
                      </p>
                    </div>
                    <div className='specialist-contact'>
                      <div>
                        <img
                          alt='phone-number-icon'
                          src={phoneIcon}
                        />
                        <span>{number}</span>
                      </div>
                      <div>
                        <a href={`mailto:${email}`}>
                          <img
                            alt='email-icon'
                            src={emailIcon}
                          />
                          <span>{email}</span>
                        </a>
                      </div>
                      <div>
                        <a href={linkedin} rel='noreferrer' target='_blank'>
                          <img
                            alt='linkedin-icon'
                            src={linkedInIcon}
                          />
                          <span>LinkedIn profile</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specialists;
