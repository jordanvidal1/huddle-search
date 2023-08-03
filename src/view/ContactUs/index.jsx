import React from 'react';

import Hero from '../shared/LeadershipHero';
import Leadership from '../shared/Specialists';
import Contact from './Contact';
import FollowUs from './FollowUs';

const ContactUs = () => (
  <div className='contact-us'>
    <Hero type='contact'>
      We’d love you to give us a <a>shout</a>
    </Hero>
    <Contact />
    <Leadership />
    <FollowUs />
  </div>
);

export default ContactUs;
