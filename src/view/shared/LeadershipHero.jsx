import React from 'react';
import {useTranslation} from 'react-i18next';
// import {capitalize} from '@material-ui/core';
import {NAMESPACE} from '../../data/constants';
// import {isHuddle} from '../../services/helper';
// import Roles from './Roles';
import ContactContainer from './ContactVisitContainer';
import PrinciplesContainer from './PrinciplesContainer';

import {ReactComponent as Plus} from '../../static/icons/plus.svg';
import {ReactComponent as Equals} from '../../static/icons/equal.svg';
// import {ReactComponent as Arrow} from '../../static/icons/arrow.svg';

// import Signature1 from '../../static/huddle/signature-1.svg';
// import Signature2 from '../../static/huddle/signature-2.svg';
// import Signature3 from '../../static/huddle/signature-3.svg';
// import UnitasSignature1 from '../../static/unitas/signature-1.svg';
// import UnitasSignature2 from '../../static/unitas/signature-2.svg';
// import UnitasSignature3 from '../../static/unitas/signature-3.svg';

// const leadershipComponent = t => (
//   <div className='info-container'>
//     <div className='info-box'>
//       <div className='info-title'>
//         <h5>
//           {t(`${NAMESPACE}:leadershipHero:leadershipTeam:info:title`)}
//         </h5>
//       </div>
//       <div className='info-details'>
//         <div className='info-detail'>
//           <h2>50</h2>
//           <span>Years experienced</span>
//         </div>
//         <div className='info-detail'>
//           <h2>10K</h2>
//           <span>Clients served</span>
//         </div>
//         <div className='info-detail'>
//           <h2>50K</h2>
//           <span>Candidates placed</span>
//         </div>
//         <div className='info-detail'>
//           <h2>100</h2>
//           <span>Sectors operated</span>
//         </div>
//         <div className='info-detail'>
//           <h2>250</h2>
//           <span>Specialisms mastered</span>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const defaultSignature = {
//   name: 'Name',
//   role: 'Role'
// }

// const signatures = [
//   {...defaultSignature, img: isHuddle ? Signature1 : UnitasSignature1},
//   {...defaultSignature, img: isHuddle ? Signature2 : UnitasSignature2},
//   {...defaultSignature, img: isHuddle ? Signature3 : UnitasSignature3}
// ];

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
      {/*<div className='info-signatures'>*/}
      {/*  {signatures.map((signature, i) => (*/}
      {/*    <div key={i} className='info-signature'>*/}
      {/*      <img alt='signature-img' src={signature.img} />*/}
      {/*      <div>*/}
      {/*        <h6>{signature.name}</h6>*/}
      {/*        <span>{signature.role}</span>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}
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
        <Plus />
        <div>
          <h5>
            {t(`${NAMESPACE}:leadershipHero:ourProcess:info:calculation:2:title`)}
          </h5>
          <p>
            {t(`${NAMESPACE}:leadershipHero:ourProcess:info:calculation:2:text`)}
          </p>
        </div>
        <Equals />
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

const principlesComponent = (t, type) => (
  <div className='info-container'>
    <h3>
      {t(`${NAMESPACE}:leadershipHero:${type}:info:title`)}
    </h3>
    <PrinciplesContainer t={t} type={type} />
  </div>
);

const LeadershipHero = props => {
  const {type, img} = props;

  const {t} = useTranslation(['huddle', 'unitas', 'prime']);

  const components = {
    leadershipTeam: <div />,
    ourStory: ourStoryComponent(t),
    ourProcess: ourProcessComponent(t),
    // workForUs: Roles({
    //   name: capitalize(NAMESPACE),
    //   icon: WhiteArrow
    // }),
    contactUs: ContactContainer(t),
    executiveSearch: ourProcessComponent(t),
    corporate: principlesComponent(t, type),
    diversity: principlesComponent(t, type)
  };

  return (
    <div className='leadership-hero'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='text-container'>
              {img && <img alt='hero-img' src={img} />}
              <h5>
                {t(`${NAMESPACE}:leadershipHero:${type}:path`)}
              </h5>
              <div className='title'>
                <h1>
                  {t(`${NAMESPACE}:leadershipHero:${type}:title:part1`)}
                  <a>
                    {t(`${NAMESPACE}:leadershipHero:${type}:title:part2`)}
                  </a>
                  {t(`${NAMESPACE}:leadershipHero:${type}:title:part3`)}
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
