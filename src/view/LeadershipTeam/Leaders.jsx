import React from 'react';
import {isHuddle} from '../../services/helper';

import PhoneIcon from '../../static/huddle/phone-number.svg';
import EmailIcon from '../../static/huddle/email.svg';
import LinkedInIcon from '../../static/huddle/linkedin-pink.svg';
import UnitasPhoneIcon from '../../static/unitas/phone-number-white.svg';
import UnitasEmailIcon from '../../static/unitas/email-white.svg';
import UnitasLinkedInIcon from '../../static/unitas/linkedin-white.svg';

const Leaders = ({
  leaders
}) => (
  <div className='leaders'>
    <div className='container'>
      <div className='inner-container'>
        <div className='content'>
          {leaders.map((leader) => {
            const {name, role, description, number, email, linkedin} = leader;

            return (
              <div className='leader'>
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
                    <div>
                      <img
                        alt='phone-number-icon'
                        src={isHuddle ? PhoneIcon : UnitasPhoneIcon}
                      />
                      <span>{number}</span>
                    </div>
                    <div>
                      <img
                        alt='email-icon'
                        src={isHuddle ? EmailIcon : UnitasEmailIcon}
                      />
                      <span>{email}</span>
                    </div>
                    <div>
                      <img
                        alt='linkedin-icon'
                        src={isHuddle ? LinkedInIcon : UnitasLinkedInIcon}
                      />
                      <span>{linkedin}</span>
                    </div>
                  </div>
                </div>
                <div className='img-container'>
                  <div>
                    <img alt='specialist-img' />
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

const defaultLeader = {
  name: 'Leader name',
  role: 'Role',
  description: 'Peter, a distinguished 3-time tech founder and CTO, boasts a proven track record in scaling businesses and securing significant capital. With over a decade in the tech industry, he has mastered the art of innovation and strategic leadership. Currently, he lends his unparalleled expertise as a pivotal advisor and mentor at Outlier Ventures accelerator, where his insights have not only catalyzed the growth of emerging companies but also shaped the next generation of tech leaders. A visionary in AI innovation, Peter has pioneered proprietary technology that revolutionizes the client and candidate experience here at [company name]. Beyond his professional achievements, Peter is a sought-after consultant at various companies, further solidifying his position as a thought leader in the tech space.',
  number: '+44 0000 000 000',
  email: 'leader@company.com',
  linkedin: '@leader'
};

Leaders.defaultProps = {
  leaders: [
    defaultLeader,
    defaultLeader,
    defaultLeader
  ]
};
