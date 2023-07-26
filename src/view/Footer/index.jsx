import React from 'react';
import {Grid} from '@material-ui/core';
import TextLogo from '../../text-logo.svg';
import FullLogo from '../../full-logo.svg';
import Phone from '../../phone-number.svg';
import Email from '../../email.svg';
import Location from '../../location.svg';
import LinkedIn from '../../linkedin.svg';
import Twitter from '../../twitter.svg';
import Facebook from '../../facebook.svg';
import Instagram from '../../instagram.svg';
import ThePrimeGroup from '../../the-prime-group.svg';

import './styles.scss';

const Home = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='title'>
              <h6>
                Because every search starts with a
              </h6>
              <img className='logo' alt='logo' src={TextLogo} />
            </div>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <div className='box hire-box'>
                  <div className='text'>
                    <h3>
                      Looking to hire
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Morbi curs usamet habit asse nisl est rhoncus.
                    </p>
                  </div>
                  <div className='btn-container'>
                    <button className="btn btn-secondary">
                      Submit new role
                    </button>
                    <button className="btn">
                      Talk to us
                    </button>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className='box job-box'>
                  <div className='text'>
                    <h3>
                      Looking for a job
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Morbi curs usamet habit asse nisl est rhoncus.
                    </p>
                  </div>
                  <div className='btn-container'>
                    <button className="btn btn-secondary">
                      Browse all jobs
                    </button>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className='box footer-box'>
                  <div className='footer-container'>
                    <div className='footer-content'>
                      <div className='footer-company'>
                        <img className='logo' alt='logo' src={FullLogo} />
                        <p>Because every search starts with a huddle.</p>
                      </div>
                      <div className='footer-contact'>
                        <div>
                          <img alt='phone-number' src={Phone} />
                          <span>+44 0000 000 000</span>
                        </div>
                        <div>
                          <img alt='email' src={Email} />
                          <span>+44 0000 000 000</span>
                        </div>
                        <div>
                          <img alt='location' src={Location} />
                          <span>+44 0000 000 000</span>
                        </div>
                      </div>
                      <div className='footer-socials'>
                        <img alt='linkedin' src={LinkedIn} />
                        <img alt='twitter' src={Twitter} />
                        <img alt='facebook' src={Facebook} />
                        <img alt='instagram' src={Instagram} />
                      </div>
                    </div>
                    <div className='footer-links'>
                      <div className='footer-links-column'>
                        <h6>Discover</h6>
                        <ul>
                          <li><a>Looking to hire</a></li>
                          <li><a>Looking for a job</a></li>
                          <li><a>Specialisms</a></li>
                          <li><a>Sectors</a></li>
                          <li><a>Resources</a></li>
                        </ul>
                      </div>
                      <div className='footer-links-column'>
                        <h6>Services</h6>
                        <ul>
                          <li><a>Executive Search</a></li>
                          <li><a>Embedded Talent Solutions</a></li>
                          <li><a>Contract/Interim</a></li>
                        </ul>
                      </div>
                      <div className='footer-links-column'>
                        <h6>Company</h6>
                        <ul>
                          <li><a>About Us</a></li>
                          <li><a>Work For Us</a></li>
                          <li><a>Contact Us</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='divider'/>
                  <div className='footer-legal'>
                    <div>
                      <a><span>Legal</span></a>
                      <a><span>Cookies</span></a>
                      <a><span>Privacy</span></a>
                      <a><span>Terms</span></a>
                    </div>
                    <div>
                      <span>
                        Proudly part of <img alt='prime-group' src={ThePrimeGroup} />
                      </span>
                    </div>
                    <div>
                      <span>
                        2023 © Huddle Search. All rights reserved.{/* todo: make year dynamic */}
                      </span>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
