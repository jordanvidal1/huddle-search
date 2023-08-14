import React from 'react';
import {useTranslation} from 'react-i18next';
import {capitalize} from '@material-ui/core';
import Roles from './Roles';
import ContactContainer from './ContactVisitContainer';
import Signature1 from '../../static/huddle/signature-1.svg';
import Signature2 from '../../static/huddle/signature-2.svg';
import Signature3 from '../../static/huddle/signature-3.svg';
import PlusIcon from '../../static/huddle/plus.svg';
import EqualsIcon from '../../static/huddle/equals.svg';

const leadershipComponent = t => (
  <div className='info-container'>
    <div className='info-box'>
      <div className='info-title'>
        <h5>
          {t(`${window.SITE_NAME}:leadershipHero:leadershipTeam:info:title`)}
        </h5>
      </div>
      <div className='info-details'>
        <div className='info-detail'>
          <h2>50</h2>
          <span>Years experienced</span>
        </div>
        <div className='info-detail'>
          <h2>10K</h2>
          <span>Clients served</span>
        </div>
        <div className='info-detail'>
          <h2>50K</h2>
          <span>Candidates placed</span>
        </div>
        <div className='info-detail'>
          <h2>100</h2>
          <span>Sectors operated</span>
        </div>
        <div className='info-detail'>
          <h2>250</h2>
          <span>Specialisms mastered</span>
        </div>
      </div>
    </div>
  </div>
);

const defaultSignature = {
  name: 'Name',
  role: 'Role'
}

const signatures = [
  {...defaultSignature, img: Signature1},
  {...defaultSignature, img: Signature2},
  {...defaultSignature, img: Signature3}
];

const ourStoryComponent = t => (
  <div className='info-container'>
    <div className='info-box'>
      <div className='info-title'>
        <h5>
          {t(`${window.SITE_NAME}:leadershipHero:ourStory:info:title`)}
        </h5>
      </div>
      <div className='info-description'>
        <span>
          {t(`${window.SITE_NAME}:leadershipHero:ourStory:info:text`)}
        </span>
      </div>
      <div className='info-signatures'>
        {signatures.map((signature) => (
          <div className='info-signature'>
            <img alt='signature-img' src={signature.img} />
            <div>
              <h6>{signature.name}</h6>
              <span>{signature.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ourProcessComponent = t => (
  <div className='info-container'>
    <div className='info-box'>
      <div className='info-title'>
        <h5>
          {t(`${window.SITE_NAME}:leadershipHero:ourProcess:info:title`)}
        </h5>
      </div>
      <div className='info-calculation'>
        <div>
          <h5>
            {t(`${window.SITE_NAME}:leadershipHero:ourProcess:info:calculation:1:title`)}
          </h5>
          <span>
            {t(`${window.SITE_NAME}:leadershipHero:ourProcess:info:calculation:1:text`)}
          </span>
        </div>
        <img alt='plus-icon' src={PlusIcon} />
        <div>
          <h5>
            {t(`${window.SITE_NAME}:leadershipHero:ourProcess:info:calculation:2:title`)}
          </h5>
          <span>
            {t(`${window.SITE_NAME}:leadershipHero:ourProcess:info:calculation:2:text`)}
          </span>
        </div>
        <img alt='equals-icon' src={EqualsIcon} />
        <div>
          <h5>
            {t(`${window.SITE_NAME}:leadershipHero:ourProcess:info:calculation:3:title`)}
          </h5>
          <span>
            {t(`${window.SITE_NAME}:leadershipHero:ourProcess:info:calculation:3:text`)}
          </span>
        </div>
      </div>
    </div>
  </div>
);

const LeadershipHero = props => {
  const {children, type} = props;

  const {t} = useTranslation(['huddle', 'unitas']);

  const siteName = capitalize(window.SITE_NAME);

  const components = {
    leadershipTeam: leadershipComponent(t),
    ourStory: ourStoryComponent(t),
    ourProcess: ourProcessComponent(t),
    workForUs: Roles({
      children: `Open roles at ${siteName}`,
      name: siteName
    }),
    contactUs: ContactContainer(t),
    executiveSearch: ourProcessComponent(t)
  };

  return (
    <div className='leadership-hero'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='text-container'>
              <h5>
                {t(`${window.SITE_NAME}:leadershipHero:${type}:path`)}
              </h5>
              <div className='title'>
                <h1>
                  {children}
                </h1>
              </div>
              <div className='text'>
                <span>
                  {t(`${window.SITE_NAME}:leadershipHero:${type}:desc`)}
                </span>
              </div>
            </div>
            {components[type]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadershipHero;
