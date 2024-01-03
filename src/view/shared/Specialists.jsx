import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  LEADERS,
  LEADER_EMAILS,
  NAMESPACE,
  LEADER_ROLES
} from '../../data/constants';

import {ReactComponent as Phone} from '../../static/icons/phone.svg';
import {ReactComponent as Email} from '../../static/icons/email.svg';
import {ReactComponent as LinkedIn} from '../../static/icons/linkedin-sm.svg';

const Specialists = props => {
  const {type = 'leadership', name, specialists, company} = props;

  const {t} = useTranslation(['huddle', 'unitas', 'prime']);

  const leaders = specialists || LEADERS[company] || LEADERS[NAMESPACE];

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
                  id,
                  img,
                  name,
                  role,
                  description,
                  number,
                  email,
                  linkedin
                } = specialist;

                const leaderEmail = LEADER_EMAILS[company]?.[id] || email;
                const leaderRole = LEADER_ROLES[company]?.[id] || role;

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
                        {leaderRole}
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
                        <a href={`mailto:${leaderEmail}`}>
                          <Email />
                          <span>{leaderEmail}</span>
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
