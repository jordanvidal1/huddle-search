import React from 'react';
import {useTranslation} from 'react-i18next';
import {NAMESPACE} from '../../data/constants';
import {isHuddle} from '../../services/helper';
import Roles from './Roles';
import ContactContainer from './ContactVisitContainer';

import Signature1 from '../../static/huddle/signature-1.svg';
import Signature2 from '../../static/huddle/signature-2.svg';
import Signature3 from '../../static/huddle/signature-3.svg';
import UnitasSignature1 from '../../static/unitas/signature-1.svg';
import UnitasSignature2 from '../../static/unitas/signature-2.svg';
import UnitasSignature3 from '../../static/unitas/signature-3.svg';
import PlusIcon from '../../static/huddle/plus.svg';
import EqualsIcon from '../../static/huddle/equals.svg';
import WhiteArrow from '../../static/unitas/arrow-white.svg';

const leadershipComponent = t => (
  <div className='info-container'>
    <div className='info-box'>
      <div className='info-title'>
        <h5>
          {t(`${NAMESPACE}:leadershipHero:leadershipTeam:info:title`)}
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
  {...defaultSignature, img: isHuddle ? Signature1 : UnitasSignature1},
  {...defaultSignature, img: isHuddle ? Signature2 : UnitasSignature2},
  {...defaultSignature, img: isHuddle ? Signature3 : UnitasSignature3}
];

const ourStoryComponent = t => (
  <div className='info-container'>
    <div className='info-box'>
      <div className='info-title'>
        <h5>
          {t(`${NAMESPACE}:leadershipHero:ourStory:info:title`)}
        </h5>
      </div>
      <div className='info-description'>
        <p>
          {t(`${NAMESPACE}:leadershipHero:ourStory:info:text`)}
        </p>
      </div>
      <div className='info-signatures'>
        {signatures.map((signature, i) => (
          <div key={i} className='info-signature'>
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
          {t(`${NAMESPACE}:leadershipHero:ourProcess:info:title`)}
        </h5>
      </div>
      <div className='info-calculation'>
        <div>
          <h5>
            {t(`${NAMESPACE}:leadershipHero:ourProcess:info:calculation:1:title`)}
          </h5>
          <p>
            {t(`${NAMESPACE}:leadershipHero:ourProcess:info:calculation:1:text`)}
          </p>
        </div>
        <img alt='plus-icon' src={PlusIcon} />
        <div>
          <h5>
            {t(`${NAMESPACE}:leadershipHero:ourProcess:info:calculation:2:title`)}
          </h5>
          <p>
            {t(`${NAMESPACE}:leadershipHero:ourProcess:info:calculation:2:text`)}
          </p>
        </div>
        <img alt='equals-icon' src={EqualsIcon} />
        <div>
          <h5>
            {t(`${NAMESPACE}:leadershipHero:ourProcess:info:calculation:3:title`)}
          </h5>
          <p>
            {t(`${NAMESPACE}:leadershipHero:ourProcess:info:calculation:3:text`)}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const LeadershipHero = props => {
  const {children, type} = props;

  const {t} = useTranslation(['huddle', 'unitas']);

  const siteName = isHuddle ? 'Huddle' : 'Unitas';

  const components = {
    leadershipTeam: <div />,
    ourStory: ourStoryComponent(t),
    ourProcess: ourProcessComponent(t),
    workForUs: Roles({
      children: `Open roles at ${siteName}`,
      name: siteName,
      icon: WhiteArrow
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
                {t(`${NAMESPACE}:leadershipHero:${type}:path`)}
              </h5>
              <div className='title'>
                <h1>
                  {children}
                </h1>
              </div>
              <div className='text'>
                <p>
                  {t(`${NAMESPACE}:leadershipHero:${type}:desc`)}
                </p>
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
