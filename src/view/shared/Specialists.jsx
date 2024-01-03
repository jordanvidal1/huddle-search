import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  LEADERS,
  NAMESPACE,
} from '../../data/constants';

import {ReactComponent as Phone} from '../../static/icons/phone.svg';
import {ReactComponent as Email} from '../../static/icons/email.svg';
import {ReactComponent as LinkedIn} from '../../static/icons/linkedin-sm.svg';

const Specialists = props => {
  const {type = 'leadership', name, specialists} = props;

  const {t} = useTranslation(['huddle', 'unitas', 'prime']);

  const leaders = specialists || LEADERS[NAMESPACE];

  return (
    <div className='specialists'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='text-container'>
              <div className='title'>
                <h2>
                  {t(`${NAMESPACE}:specialists:${type}:title`, {
                    name,
                    interpolation: {escapeValue: false}
                  })}
                </h2>
              </div>
              <div className='text'>
                <p>
                  {t(`${NAMESPACE}:specialists:${type}:desc`)}
                </p>
              </div>
            </div>
            <div className='specialists-container'>
              {leaders.map((specialist, i) => {
                const {
                  img,
                  name,
                  role,
                  description,
                  number,
                  email,
                  linkedin
                } = specialist;

                return (
                  <div key={i} className='specialist'>
                    <div className='specialist-img-container'>
                      <img alt='specialist-img' src={img} />
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
