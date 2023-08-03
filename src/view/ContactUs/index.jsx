import React from 'react';

import Hero from '../shared/LeadershipHero';
import Leadership from '../shared/Specialists';
import ContactForm from './ContactForm';
import FollowUs from './FollowUs';

const ContactUs = () => (
  <div className='contact-us'>
    <Hero type='contact'>
      We’d love you to give us a <a>shout</a>
    </Hero>
    <ContactForm />
    <Leadership />
    <FollowUs />
  </div>
);

export default ContactUs;
