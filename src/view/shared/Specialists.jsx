import React from 'react';
import {useTranslation} from 'react-i18next';

import PhoneIcon from '../../static/huddle/phone-number.svg';
import EmailIcon from '../../static/huddle/email.svg';
import LinkedInIcon from '../../static/huddle/linkedin-pink.svg';
import ExecutivePhoneIcon from '../../static/huddle/phone-number-grey.svg';
import ExecutiveEmailIcon from '../../static/huddle/email-grey.svg';
import ExecutiveLinkedInIcon from '../../static/huddle/linkedin-grey.svg';

import UnitasPhoneIcon from '../../static/unitas/phone-number-white.svg';
import UnitasEmailIcon from '../../static/unitas/email-white.svg';
import UnitasLinkedInIcon from '../../static/unitas/linkedin-white.svg';

const isHuddle = window.HUDDLE;

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
                  {t(`${window.SITE_NAME}:specialists:${type}:title`, {name})}
                </h2>
              </div>
              <div className='text'>
                <p>
                  {t(`${window.SITE_NAME}:specialists:${type}:desc`)}
                </p>
              </div>
            </div>
            <div className='specialists-container'>
              {specialists.map((specialist) => {
                const {img, name, role, description, number, email, linkedin} = specialist;

                return (
                  <div className='specialist'>
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
                        <img
                          alt='email-icon'
                          src={emailIcon}
                        />
                        <span>{email}</span>
                      </div>
                      <div>
                        <img
                          alt='linkedin-icon'
                          src={linkedInIcon}
                        />
                        <span>{linkedin}</span>
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

const defaultSpecialist = {
  name: 'Name',
  role: 'Role',
  description: 'Lorem ipsum dolor sit amet consectetur. Ultrices sed dignissim nibh feugiat mauris pellentesque. Vulputate ipsum lectus.',
  number: '+44 0000 000 000',
  email: 'leader@company.com',
  linkedin: '@leader'
};

Specialists.defaultProps = {
  specialists: [
    defaultSpecialist,
    defaultSpecialist,
    defaultSpecialist
  ]
};
