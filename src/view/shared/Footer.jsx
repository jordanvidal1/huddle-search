import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import {useTranslation} from 'react-i18next';
import {Grid} from '@material-ui/core';
import {NAMESPACE, SECTORS, SPECIALISMS} from '../../data/constants';
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
import FooterArrow from '../../static/huddle/footer-arrow.svg';
import UnitasFooterArrow from '../../static/unitas/footer-arrow.svg';

const discoverRoutes = [
  {
    name: 'Looking to hire',
    path: '/looking-to-hire'
  },
  {
    name: 'Looking for a job',
    path: '/looking-for-a-job'
  },
  {
    name: 'Specialisms',
    subLinks: SPECIALISMS[NAMESPACE]
  },
  {
    name: 'Sectors',
    subLinks: SECTORS[NAMESPACE]
  },
  {
    name: 'Resources',
    path: '/resources'
  }
];

const servicesRoutes = [
  {
    name: 'Executive Search',
    subLinks: '/executive-search'
  },
  {
    name: 'Embedded Talent Solutions',
    subLinks: '/embedded-talent-solutions'
  },
  {
    name: 'Contract/Interim',
    path: '/contract-interim'
  }
]

const companyRoutes = [
  {
    name: 'About us',
    subLinks: [
      {
        name: 'Leadership team',
        path: '/leadership-team'
      },
      {
        name: 'Our story',
        path: '/our-story'
      },
      {
        name: 'Our process',
        path: '/our-process'
      },
      // {
      //   name: 'Corporate social responsibility'
      // },
      // {
      //   name: 'Diversity, equality & inclusion'
      // },
      {
        name: 'The Prime Group',
        path: 'the-prime-group'
      }
    ]
  },
  {
    name: 'Work for us',
    path: '/work-for-us'
  },
  {
    name: 'Contact us',
    path: '/contact-us'
  }
];

const Footer = () => {
  const [expanded, setExpanded] = useState('');

  const {t} = useTranslation(['huddle', 'unitas']);

  const location = useLocation();

  const handleExpandClick = route => setExpanded(route);

  const closeExpandClick = () => setExpanded('');

  useEffect(() => {
    closeExpandClick();
  }, [location]);

  const renderDropdown = route => expanded === route.name && (
    <div className='footer-dropdown'>
      {route.subLinks.map((subLink, i) => (
        <div key={i}>
          <Link to={subLink.path}>
            {subLink.name}
          </Link>
        </div>
      ))}
    </div>
  );

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
                          {discoverRoutes.map((route, i) => (
                            <li key={i}>
                              {route.subLinks ? (
                                <div onClick={() => {
                                  handleExpandClick(
                                    expanded === route.name
                                      ? ''
                                      : route.name
                                  )
                                }}>
                                  <span>
                                    {route.name}
                                    <img
                                      alt='arrow'
                                      className='header-arrow'
                                      src={isHuddle ? FooterArrow : UnitasFooterArrow}
                                    />
                                  </span>
                                  {route.subLinks && renderDropdown(route)}
                                </div>
                              ) : (
                                <Link to={route.path}>
                                  {route.name}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className='footer-links-column'>
                        <h6>Services</h6>
                        <ul>
                          {servicesRoutes.map((route, i) => (
                            <li key={i}>
                              <Link to={route.path}>
                                {route.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className='footer-links-column'>
                        <h6>Company</h6>
                        <ul>
                          {companyRoutes.map((route, i) => (
                            <li key={i}>
                              {route.subLinks ? (
                                <div onClick={() => {
                                  handleExpandClick(
                                    expanded === route.name
                                      ? ''
                                      : route.name
                                  )
                                }}>
                                  <span>
                                    {route.name}
                                    <img
                                      alt='arrow'
                                      className='header-arrow'
                                      src={isHuddle ? FooterArrow : UnitasFooterArrow}
                                    />
                                  </span>
                                  {route.subLinks && renderDropdown(route)}
                                </div>
                              ) : (
                                <Link to={route.path}>
                                  {route.name}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='divider'/>
                  <div className='footer-legal'>
                    <div className='footer-legal-links'>
                      {/*<Link to='/legal'>Legal</Link>*/}
                      {/*<Link to='/cookies'>Cookies</Link>*/}
                      <Link to='/privacy-policy'>Privacy policy</Link>
                      {/*<Link to='/terms'>Terms</Link>*/}
                    </div>
                    <div className='footer-legal-prime'>
                      <Link to='/the-prime-group'>
                        Proudly part of <img
                          alt='prime-group'
                          src={isHuddle ? ThePrimeGroup : UnitasThePrimeGroup}
                        />
                      </Link>
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
