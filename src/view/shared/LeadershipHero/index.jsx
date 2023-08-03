import React from 'react';
import Roles from '../Roles';
import ContactContainer from '../ContactVisitContainer';
import Signature1 from '../../../static/signature-1.svg';
import Signature2 from '../../../static/signature-2.svg';
import Signature3 from '../../../static/signature-3.svg';
import PlusIcon from '../../../static/plus.svg';
import EqualsIcon from '../../../static/equals.svg';
import './styles.scss';

const leadershipComponent = () => (
  <div className='info-container'>
    <div className='info-box'>
      <div className='info-title'>
        <h5>
          The leadership in numbers...
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

const ourStoryComponent = () => (
  <div className='info-container'>
    <div className='info-box'>
      <div className='info-title'>
        <h5>
          The mission statement...
        </h5>
      </div>
      <div className='info-description'>
        <span>
          Lorem ipsum dolor sit amet consectetur. Tempor auctor posuere parturient sit amet nisl duis nibh consectetur. Ullamcorper sit eu faucibus volutpat quam tellus. Elit mi lorem ultrices in dolor adipiscing. Convallis quisque sed ipsum egestas. Leo aliquam sed convallis nunc proin.
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

const ourProcessComponent = () => (
  <div className='info-container'>
    <div className='info-box'>
      <div className='info-title'>
        <h5>
          The internal propitiatory tech...
        </h5>
      </div>
      <div className='info-calculation'>
        <div>
          <h5>
            Simultaneous talent pool targeting
          </h5>
          <span>
            We run concurrent searches on internal and external sources e.g. pro networks and job boards.
          </span>
        </div>
        <img alt='plus-icon' src={PlusIcon} />
        <div>
          <h5>
            Extensive data analysis
          </h5>
          <span>
            We accurately examine suitable candidates with unparalleled position specificity.
          </span>
        </div>
        <img alt='equals-icon' src={EqualsIcon} />
        <div>
          <h5>
            Automated candidate sourcing
          </h5>
          <span>
            We intelligently identify and effectively engage with highly-qualified individuals.
          </span>
        </div>
      </div>
    </div>
  </div>
);

const elements = {
  leadership: {
    text: 'Lorem ipsum dolor sit amet consectetur. Nibh bibendum tempor lorem a non mauris hendrerit mauris. Vitae cursus orci vulputate condimentum.',
    path: '/leadership-team',
    infoComponent: leadershipComponent()
  },
  story: {
    path: '/our-story',
    text: 'Lorem ipsum dolor sit amet consectetur. Nibh bibendum tempor lorem a non mauris hendrerit mauris. Vitae cursus orci vulputate condimentum.',
    infoComponent: ourStoryComponent()
  },
  process: {
    path: '/our-process',
    text: 'Lorem ipsum dolor sit amet consectetur. Nibh bibendum tempor lorem a non mauris hendrerit mauris. Vitae cursus orci vulputate condimentum.',
    infoComponent: ourProcessComponent()
  },
  work: {
    path: '/work-for-us',
    text: 'Lorem ipsum dolor sit amet consectetur. Nibh bibendum tempor lorem a non mauris hendrerit mauris. Vitae cursus orci vulputate condimentum.',
    infoComponent: Roles({
      children: 'Open roles at Huddle',
      name: 'Huddle'
    })
  },
  contact: {
    path: '/contact-us',
    text: 'Lorem ipsum dolor sit amet consectetur. Nibh bibendum tempor lorem a non mauris hendrerit mauris. Vitae cursus orci vulputate condimentum.',
    infoComponent: ContactContainer()
  }
};

const LeadershipHero = props => {
  const {children, type} = props;

  return (
    <div className='hero'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='text-container'>
              <h5>
                {elements[type].path}
              </h5>
              <div className='title'>
                <h1>
                  {children}
                </h1>
              </div>
              <div className='text'>
                <span>
                  {elements[type].text}
                </span>
              </div>
            </div>
            {elements[type].infoComponent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadershipHero;
