import React from 'react';

// import Hero from '../shared/CompanyHero';
import Leadership from '../shared/Specialists';
import OurStory from '../shared/OurStory';
import WorkForUs from '../shared/WorkForUs';


const Company = () => (
  <div className='company'>
    {/*<Hero*/}
    {/*  type='ourStory'*/}
    {/*  img={!isHuddle && HeroImg}*/}
    {/*/>*/}
    <Leadership />
    <OurStory type='story' />
    <OurStory type='process' />
    <WorkForUs home />
  </div>
);

export default Company;
