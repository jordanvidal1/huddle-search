import React from 'react';
import {useTranslation} from 'react-i18next';

import PhoneIcon from '../../static/phone-number.svg';
import EmailIcon from '../../static/email.svg';
import LinkedInIcon from '../../static/linkedin-pink.svg';

import PhoneGreyIcon from '../../static/phone-number-grey.svg';
import EmailGreyIcon from '../../static/email-grey.svg';
import LinkedInGreyIcon from '../../static/linkedin-grey.svg';

const Specialists = props => {
  const {type = 'leadership', name, specialists, executive} = props;

  const {t} = useTranslation(['huddle']);

  return (
    <div className='specialists'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='text-container'>
              <div className='title'>
                <h2>
                  {t(`huddle:specialists:${type}:title`, {name})}
                </h2>
              </div>
              <div className='text'>
                <span>
                  {t(`huddle:specialists:${type}:desc`)}
                </span>
              </div>
            </div>
            <div className='specialists-container'>
              {specialists.map((specialist) => {
                const {img, name, role, description, number, email, linkedin} = specialist;

                return (
                  <div className='specialist'>
                    <img alt='specialist-img' />
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
                          src={executive ? PhoneGreyIcon : PhoneIcon}
                        />
                        <span>{number}</span>
                      </div>
                      <div>
                        <img
                          alt='email-icon'
                          src={executive ? EmailGreyIcon : EmailIcon}
                        />
                        <span>{email}</span>
                      </div>
                      <div>
                        <img
                          alt='linkedin-icon'
                          src={executive ? LinkedInGreyIcon : LinkedInIcon}
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
