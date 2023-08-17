import React from 'react';
import {useTranslation} from 'react-i18next';
import {getNamespace, isHuddle} from '../../services/helper';

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
                  {t(`${getNamespace}:specialists:${type}:title`, {name})}
                </h2>
              </div>
              <div className='text'>
                <p>
                  {t(`${getNamespace}:specialists:${type}:desc`)}
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
  description: 'Peter, a distinguished 3-time tech founder and CTO, boasts a proven track record in scaling businesses and securing significant capital. With over a decade in the tech industry, he has mastered the art of innovation and strategic leadership. Currently, he lends his unparalleled expertise as a pivotal advisor and mentor at Outlier Ventures accelerator, where his insights have not only catalyzed the growth of emerging companies but also shaped the next generation of tech leaders. A visionary in AI innovation, Peter has pioneered proprietary technology that revolutionizes the client and candidate experience here at [company name]. Beyond his professional achievements, Peter is a sought-after consultant at various companies, further solidifying his position as a thought leader in the tech space.',
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
