import React from 'react';

import Hero from '../shared/LeadershipHero';
import Leadership from '../shared/Specialists';

const ContactUs = () => (
  <div className='contact-us'>
    <Hero type='contact'>
      We’d love you to give us a <a>shout</a>
    </Hero>
    {/*<Contact />*/}
    <Leadership />
    {/*<Join />*/}
  </div>
);

export default ContactUs;
