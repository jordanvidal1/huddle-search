import React from 'react';
import {NAMESPACE} from '../../data/constants';

import Hero from '../shared/LeadershipHero';
import Leadership from '../shared/Specialists';
import ContactForm from './ContactForm';
import FollowUs from './FollowUs';

import UnitasHero from '../../static/unitas/contact-us.png';
import PrimeHero from '../../static/prime/tpg-hero-contact-us-min.png';

const IMAGES = {
  huddle: false,
  unitas: UnitasHero,
  prime: PrimeHero,
};

const ContactUs = () => (
  <div className='contact-us'>
    <Hero type='contactUs' img={IMAGES[NAMESPACE]} />
    <ContactForm />
    <Leadership />
    <FollowUs />
  </div>
);

export default ContactUs;
