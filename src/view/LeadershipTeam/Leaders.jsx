import React from 'react';
import PhoneIcon from '../../static/phone-number.svg';
import EmailIcon from '../../static/email.svg';
import LinkedInIcon from '../../static/linkedin-pink.svg';

const Leaders = ({
  leaders
}) => (
  <div className='leaders'>
    <div className='container'>
      <div className='inner-container'>
        <div className='content'>
          {leaders.map((leader) => {
            const {name, role, description, number, email, linkedin, imgReversed} = leader;

            return (
              <div className='leader'>
                {imgReversed && (
                  <div className='img-container'>
                    <img alt='specialist-img' />
                  </div>
                )}
                <div className='text-container'>
                  <div className='title'>
                    <h2>{name}</h2>
                  </div>
                  <div className='role'>
                    <span>{role}</span>
                  </div>
                  <div className='text'>
                    <span>{description}</span>
                  </div>
                  <div className='leader-contact'>
                    <div>
                      <img alt='phone-number-icon' src={PhoneIcon} />
                      <span>{number}</span>
                    </div>
                    <div>
                      <img alt='email-icon' src={EmailIcon} />
                      <span>{email}</span>
                    </div>
                    <div>
                      <img alt='linkedin-icon' src={LinkedInIcon} />
                      <span>{linkedin}</span>
                    </div>
                  </div>
                </div>
                {!imgReversed && (
                  <div className='img-container'>
                    <img alt='specialist-img' />
                  </div>
                )}
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
  description: 'Lorem ipsum dolor sit amet consectetur. Purus vulputate scele risque tellus massa purus velit.\n\nIn ullamcorper gravida ut morbi. Amet diam nisl gravida porttitor neque. Iaculis velit tortor eu leo morbi. Turpis libero pretium condimentum habitant amet vel.\n\nUt integer elementum massa iaculis elit enim dui elit. Euismod condimentum ultrices iaculis in. Mi convallis risus interdum quis id lacus fringilla feugiat.',
  number: '+44 0000 000 000',
  email: 'leader@company.com',
  linkedin: '@leader'
};

Leaders.defaultProps = {
  leaders: [
    defaultLeader,
    {...defaultLeader, imgReversed: true},
    defaultLeader
  ]
};
