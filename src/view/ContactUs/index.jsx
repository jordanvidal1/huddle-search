import React from 'react';
import {isHuddle} from '../../services/helper';

import Hero from '../shared/LeadershipHero';
import Leadership from '../shared/Specialists';
import ContactForm from './ContactForm';
import FollowUs from './FollowUs';

import HeroImg from '../../static/unitas/contact-us.png';

const ContactUs = () => (
  <div className='contact-us'>
    <Hero type='contactUs' img={!isHuddle && HeroImg} />
    <ContactForm />
    <Leadership />
    <FollowUs />
  </div>
);

export default ContactUs;
