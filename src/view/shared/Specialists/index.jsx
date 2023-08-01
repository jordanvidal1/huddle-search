import React from 'react';
import SpecialistPlaceholder from '../../../static/specialist.jpg';
import PhoneIcon from '../../../static/phone-number.svg';
import EmailIcon from '../../../static/email.svg';
import LinkedInIcon from '../../../static/linkedin-pink.svg';
import './styles.scss';

const Specialists = props => {
  const {name, specialists} = props;

  const headerText = name
    ? `Specialists in ${name}`
    : 'Leadership Team';

  return (
    <div className='specialists'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='text-container'>
              <div className='title'>
                <h2>
                  {headerText}
                </h2>
              </div>
              <div className='text'>
                <span>
                  Lorem ipsum dolor sit amet consectetur. Ultrices sed dignissim nibh feugiat mauris pellentesque. Vulputate ipsum lectus interdum interdum purus accumsan amet nisl tellus.
                </span>
              </div>
            </div>
            <div className='specialists-container'>
              {specialists.map((specialist) => {
                const {img, name, role, description, number, email, linkedin} = specialist;

                return (
                  <div className='specialist'>
                    <img alt='specialist-img' src={img} />
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
  img: SpecialistPlaceholder,
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
