import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import {useTranslation} from 'react-i18next';
import {Grid} from '@material-ui/core';
import {NAMESPACE} from '../../data/constants';
import {isHuddle} from '../../services/helper';

import TextLogo from '../../static/huddle/text-logo.svg';
import FullLogo from '../../static/huddle/full-logo.svg';
import Phone from '../../static/huddle/phone-number.svg';
import Email from '../../static/huddle/email.svg';
import Location from '../../static/huddle/location.svg';
import LinkedIn from '../../static/huddle/linkedin.svg';
// import Twitter from '../../static/huddle/twitter.svg';
// import Facebook from '../../static/huddle/facebook.svg';
// import Instagram from '../../static/huddle/instagram.svg';
import ThePrimeGroup from '../../static/huddle/the-prime-group.svg';

import UnitasLogo from '../../static/unitas/full-logo.svg';
import UnitasPhone from '../../static/unitas/phone-number.svg';
import UnitasEmail from '../../static/unitas/email.svg';
import UnitasLocation from '../../static/unitas/location.svg';
import UnitasLinkedIn from '../../static/unitas/linkedin.svg';
// import UnitasTwitter from '../../static/unitas/twitter.svg';
// import UnitasFacebook from '../../static/unitas/facebook.svg';
// import UnitasInstagram from '../../static/unitas/instagram.svg';
import UnitasThePrimeGroup from '../../static/unitas/the-prime-group.svg';

const Footer = () => {
  const {t} = useTranslation(['huddle', 'unitas']);

  return (
    <div className='footer'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            {isHuddle && (
              <div className='title'>
                <h6>
                  Because every search starts with a
                </h6>
                <img className='logo' alt='logo' src={TextLogo} />
              </div>
            )}
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <div className='box hire-box'>
                  <div className='text'>
                    <h3>
                      {t(`${NAMESPACE}:footer:lookingToHire:title`)}
                    </h3>
                    <p>
                      {t(`${NAMESPACE}:footer:lookingToHire:desc`)}
                    </p>
                  </div>
                  <div className='btn-container'>
                    <HashLink to='/contact-us#contact' className="btn btn-secondary">
                      Submit new role
                    </HashLink>
                    <HashLink to='/contact-us#contact' className="btn">
                      Talk to us
                    </HashLink>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className='box job-box'>
                  <div className='text'>
                    <h3>
                      {t(`${NAMESPACE}:footer:lookingForAJob:title`)}
                    </h3>
                    <p>
                      {t(`${NAMESPACE}:footer:lookingForAJob:desc`)}
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
                        <img
                          className='logo'
                          alt='logo'
                          src={isHuddle ? FullLogo : UnitasLogo}
                        />
                        <p>{t(`${NAMESPACE}:footer:slogan`)}</p>
                      </div>
                      <div className='footer-contact'>
                        <div>
                          <img
                            alt='phone-number'
                            src={isHuddle ? Phone : UnitasPhone}
                          />
                          <span>+44 0000 000 000</span>
                        </div>
                        <div>
                          <img
                            alt='email'
                            src={isHuddle ? Email : UnitasEmail}
                          />
                          <a href={`mailto:${t(`${NAMESPACE}:footer:email`)}`}>
                            <span>
                              {t(`${NAMESPACE}:footer:email`)}
                            </span>
                          </a>
                        </div>
                        <div>
                          <img
                            alt='location'
                            src={isHuddle ? Location : UnitasLocation}
                          />
                          <span>1 Fore St Ave, London EC2Y9DT</span>
                        </div>
                      </div>
                      <div className='footer-socials'>
                        <a href='#' rel='noreferrer' target='_blank'>
                          <img
                            alt='linkedin'
                            src={isHuddle ? LinkedIn : UnitasLinkedIn}
                          />
                        </a>
                        {/*<a href='#' rel='noreferrer' target='_blank'>*/}
                        {/*  <img*/}
                        {/*    alt='twitter'*/}
                        {/*    src={isHuddle ? Twitter : UnitasTwitter}*/}
                        {/*  />*/}
                        {/*</a>*/}
                        {/*<a href='#' rel='noreferrer' target='_blank'>*/}
                        {/*  <img*/}
                        {/*    alt='facebook'*/}
                        {/*    src={isHuddle ? Facebook : UnitasFacebook}*/}
                        {/*  />*/}
                        {/*</a>*/}
                        {/*<a href='#' rel='noreferrer' target='_blank'>*/}
                        {/*  <img*/}
                        {/*    alt='instagram'*/}
                        {/*    src={isHuddle ? Instagram : UnitasInstagram}*/}
                        {/*  />*/}
                        {/*</a>*/}
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
                      Proudly part of <img
                      alt='prime-group'
                      src={isHuddle ? ThePrimeGroup : UnitasThePrimeGroup}
                    />
                    </span>
                    </div>
                    <div className='footer-copyright'>
                    <span>
                      {t(`${NAMESPACE}:footer:copyright`)}
                      {/* todo: make year dynamic */}
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
