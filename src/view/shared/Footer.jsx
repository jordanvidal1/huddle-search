import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Grid} from '@material-ui/core';
import TextLogo from '../../static/text-logo.svg';
import FullLogo from '../../static/full-logo.svg';
import Phone from '../../static/phone-number.svg';
import Email from '../../static/email.svg';
import Location from '../../static/location.svg';
import LinkedIn from '../../static/linkedin.svg';
import Twitter from '../../static/twitter.svg';
import Facebook from '../../static/facebook.svg';
import Instagram from '../../static/instagram.svg';
import ThePrimeGroup from '../../static/the-prime-group.svg';

const Footer = () => {
  const {t} = useTranslation(['huddle']);

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
              <Grid item xs={12} sm={6}>
                <div className='box hire-box'>
                  <div className='text'>
                    <h3>
                      {t('huddle:footer:lookingToHire:title')}
                    </h3>
                    <p>
                      {t('huddle:footer:lookingToHire:desc')}
                    </p>
                  </div>
                  <div className='btn-container'>
                    <button className="btn btn-secondary">
                      Submit new role
                    </button>
                    <Link to='/contact-us' className="btn">
                      Talk to us
                    </Link>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className='box job-box'>
                  <div className='text'>
                    <h3>
                      {t('huddle:footer:lookingForAJob:title')}
                    </h3>
                    <p>
                      {t('huddle:footer:lookingForAJob:desc')}
                    </p>
                  </div>
                  <div className='btn-container'>
                    <Link to='/jobs' className="btn btn-secondary">
                      Browse all jobs
                    </Link>
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
                          <span>hello@company.com</span>
                        </div>
                        <div>
                          <img alt='location' src={Location} />
                          <span>1 Fore St Ave, London EC2Y9DT</span>
                        </div>
                      </div>
                      <div className='footer-socials'>
                        <a href='#' rel='noreferrer' target='_blank'>
                          <img alt='linkedin' src={LinkedIn} />
                        </a>
                        <a href='#' rel='noreferrer' target='_blank'>
                          <img alt='twitter' src={Twitter} />
                        </a>
                        <a href='#' rel='noreferrer' target='_blank'>
                          <img alt='facebook' src={Facebook} />
                        </a>
                        <a href='#' rel='noreferrer' target='_blank'>
                          <img alt='instagram' src={Instagram} />
                        </a>
                      </div>
                    </div>
                    <div className='footer-divider' />
                    <div className='footer-links'>
                      <div className='footer-links-column'>
                        <h6>Discover</h6>
                        <ul>
                          <li><Link to='/looking-to-hire'>Looking to hire</Link></li>
                          <li><Link to='/looking-for-a-job'>Looking for a job</Link></li>
                          <li><Link to='/specialisms'>Specialisms</Link></li>
                          {/* todo: dropdown links */}
                          <li><Link to='/sectors'>Sectors</Link></li>
                          {/* todo: dropdown links */}
                          <li><Link to='/resources'>Resources</Link></li>
                        </ul>
                      </div>
                      <div className='footer-links-column'>
                        <h6>Services</h6>
                        <ul>
                          <li><Link to='/executive-search'>Executive Search</Link></li>
                          <li><Link to='/embedded-talent-solutions'>Embedded Talent Solutions</Link></li>
                          <li><Link to='/contract-interim'>Contract/Interim</Link></li>
                        </ul>
                      </div>
                      <div className='footer-links-column'>
                        <h6>Company</h6>
                        <ul>
                          <li><Link to='/about-us'>About Us</Link></li>
                          {/* todo: dropdown links */}
                          <li><Link to='/work-for-us'>Work For Us</Link></li>
                          <li><Link to='/contact-us'>Contact Us</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='divider'/>
                  <div className='footer-legal'>
                    <div className='footer-legal-links'>
                      <Link to='/legal'>Legal</Link>
                      <Link to='/cookies'>Cookies</Link>
                      <Link to='/privacy'>Privacy</Link>
                      <Link to='/terms'>Terms</Link>
                    </div>
                    <div className='footer-legal-prime'>
                    <span>
                      Proudly part of <img alt='prime-group' src={ThePrimeGroup} />
                    </span>
                    </div>
                    <div className='footer-copyright'>
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

export default Footer;
