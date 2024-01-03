import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

import Hero from '../shared/CompanyHero';
import Leadership from '../shared/Specialists';
import OurStory from '../shared/OurStory';
import WorkForUs from '../shared/WorkForUs';

const Company = () => {
  const [company, setCompany] = useState('');

  const location = useLocation();

  useEffect(() => {
    setCompany(`${location.pathname.split('/')[2]}`);
  }, [location]);

  return (
    <div className='company'>
      <Hero company={company} />
      <Leadership />
      <OurStory type='story' />
      <OurStory type='process' />
      <WorkForUs />
    </div>
  );
}

export default Company;
