import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import {useTranslation} from 'react-i18next';
import {Grid} from '@material-ui/core';
import {
  huddleHref,
  unitasHref,
  spectrumHref,
  huddleLinkedIn,
  unitasLinkedIn,
  NAMESPACE,
  SECTORS,
  SPECIALISMS,
} from '../../data/constants';
import {isHuddle, isPrime} from '../../services/helper';

import TextLogo from '../../static/huddle/text-logo.svg';
import HuddleLogo from '../../static/huddle/full-logo.svg';
import HuddlePhone from '../../static/huddle/phone-number.svg';
import HuddleEmail from '../../static/huddle/email.svg';
import HuddleLocation from '../../static/huddle/location.svg';
import HuddleLinkedIn from '../../static/huddle/linkedin.svg';
// import HuddleTwitter from '../../static/huddle/twitter.svg';
// import HuddleFacebook from '../../static/huddle/facebook.svg';
// import HuddleInstagram from '../../static/huddle/instagram.svg';
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
import HuddleFooterArrow from '../../static/huddle/footer-arrow.svg';
import UnitasFooterArrow from '../../static/unitas/footer-arrow.svg';

import PrimeLogo from '../../static/prime/full-logo.svg';
import PrimePhone from '../../static/prime/phone-number.svg';
import PrimeEmail from '../../static/prime/email.svg';
import PrimeLocation from '../../static/prime/location.svg';
import PrimeLinkedIn from '../../static/prime/linkedin-white-filled.svg';

const ICONS = {
  huddle: {
    logo: HuddleLogo,
    phone: HuddlePhone,
    email: HuddleEmail,
    location: HuddleLocation,
    linkedin: HuddleLinkedIn,
    headerArrow: HuddleFooterArrow
  },
  unitas: {
    logo: UnitasLogo,
    phone: UnitasPhone,
    email: UnitasEmail,
    location: UnitasLocation,
    linkedin: UnitasLinkedIn,
    headerArrow: UnitasFooterArrow
  },
  prime: {
    logo: PrimeLogo,
    phone: PrimePhone,
    email: PrimeEmail,
    location: PrimeLocation,
    linkedin: PrimeLinkedIn,
    headerArrow: UnitasFooterArrow
  },
};

const discoverRoutes = isPrime ?
  [
    {
      name: 'Huddle',
      path: huddleHref,
      external: true
    },
    {
      name: 'Unitas',
      path: unitasHref,
      external: true
    },
    {
      name: 'Spectrum',
      path: spectrumHref,
      external: true
    }
  ] : [
    {
      name: 'Looking to hire',
      path: '/looking-to-hire'
    },
    {
      name: isHuddle ? 'Looking for a job' : 'Candidates',
      path: isHuddle ? '/looking-for-a-job' : '/candidates'
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

const servicesRoutes = isPrime ?
  [
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
    }
  ] : [
    {
      name: 'Permanent Hires',
      path: '/permanent-hires'
    },
    {
      name: 'Executive Search',
      path: '/executive-search'
    },
    {
      name: 'Embedded Talent Solutions',
      path: '/embedded-talent-solutions'
    },
    {
      name: 'Contract/Interim',
      path: '/contract-interim'
    }
  ];

const companyRoutes = isPrime ?
  [
    {
      name: 'Blog',
      path: '/blog'
    },
    {
      name: 'Work for us',
      path: '/work-for-us'
    },
    {
      name: 'Contact us',
      path: '/contact-us'
    }
  ] : [
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
        {
          name: 'Corporate social responsibility',
          path: '/corporate-social-responsibility'
        },
        {
          name: 'Diversity, equality & inclusion',
          path: '/diversity-equality-and-inclusion'
        },
        {
          name: 'The Prime Group',
          path: '/the-prime-group'
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

const LinkHref = props => (
  <a {...props} target='_blank' rel='noreferrer'>
    {props.children}
  </a>
);

const Footer = ({
  expanded,
  expandClick,
  toggleSidebar
}) => {
  const {t} = useTranslation(['huddle', 'unitas', 'prime']);

  return (
    <div className='footer'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            {isHuddle && (
              <div className='title'>
                <h6>
                  {t(`${NAMESPACE}:footer:title`)}
                </h6>
                <img className='logo' alt='logo' src={TextLogo} />
              </div>
            )}
            <Grid container spacing={4}>
              {!isPrime && (
                <>
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
                          {t(`${NAMESPACE}:footer:lookingToHire:button1`)}
                        </HashLink>
                        <HashLink to='/contact-us#contact' className="btn">
                          {t(`${NAMESPACE}:footer:lookingToHire:button2`)}
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
                        <HashLink to='/contact-us#contact' className="btn btn-secondary">
                          {t(`${NAMESPACE}:footer:lookingForAJob:button`)}
                        </HashLink>
                      </div>
                    </div>
                  </Grid>
                </>
              )}
              <Grid item xs={12}>
                <div className='box footer-box'>
                  <div className='footer-container'>
                    <div className='footer-content'>
                      <div className='footer-company'>
                        <img
                          className='logo'
                          alt='logo'
                          src={ICONS[NAMESPACE].logo}
                        />
                        <p>{t(`${NAMESPACE}:footer:slogan`)}</p>
                      </div>
                      <div className='footer-contact'>
                        <div>
                          <img
                            alt='phone-number'
                            src={ICONS[NAMESPACE].phone}
                          />
                          <span>{t(`${NAMESPACE}:footer:number`)}</span>
                        </div>
                        <div>
                          <img
                            alt='email'
                            src={ICONS[NAMESPACE].email}
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
                            src={ICONS[NAMESPACE].location}
                          />
                          <span>1 Fore St Ave, London EC2Y 9DT</span>
                        </div>
                      </div>
                      <div className='footer-socials'>
                        <LinkHref href={isHuddle ? huddleLinkedIn : unitasLinkedIn}>
                          <img
                            alt='linkedin'
                            src={ICONS[NAMESPACE].linkedin}
                          />
                        </LinkHref>
                        {/*<LinkHref href='#'>*/}
                        {/*  <img*/}
                        {/*    alt='twitter'*/}
                        {/*    src={isHuddle ? HuddleTwitter : UnitasTwitter}*/}
                        {/*  />*/}
                        {/*</a>*/}
                        {/*<LinkHref href='#'>*/}
                        {/*  <img*/}
                        {/*    alt='facebook'*/}
                        {/*    src={isHuddle ? HuddleFacebook : UnitasFacebook}*/}
                        {/*  />*/}
                        {/*</a>*/}
                        {/*<LinkHref href='#'>*/}
                        {/*  <img*/}
                        {/*    alt='instagram'*/}
                        {/*    src={isHuddle ? HuddleInstagram : UnitasInstagram}*/}
                        {/*  />*/}
                        {/*</a>*/}
                      </div>
                    </div>
                    <div className='footer-divider' />
                    <div className='footer-links'>
                      <div className='footer-links-column'>
                        <h6>{t(`${NAMESPACE}:footer:navHeader:1`)}</h6>
                        <ul>
                          {discoverRoutes.map((route, i) => (
                            <li key={i}>
                              {route.subLinks ? (
                                <div onClick={() => {
                                  expandClick(
                                    expanded === route.name
                                      ? ''
                                      : route.name
                                  );
                                  toggleSidebar();
                                }}>
                                  <span>
                                    {route.name}
                                    <img
                                      alt='arrow'
                                      className='header-arrow'
                                      src={ICONS[NAMESPACE].headerArrow}
                                    />
                                  </span>
                                </div>
                              ) : (
                                route.external ? (
                                  <LinkHref href={route.path}>
                                    {route.name}
                                  </LinkHref>
                                ) : (
                                  <Link to={route.path}>
                                    {route.name}
                                  </Link>
                                )
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className='footer-links-column'>
                        <h6>{t(`${NAMESPACE}:footer:navHeader:2`)}</h6>
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
                        <h6>{t(`${NAMESPACE}:footer:navHeader:3`)}</h6>
                        <ul>
                          {companyRoutes.map((route, i) => (
                            <li key={i}>
                              {route.subLinks ? (
                                <div onClick={() => {
                                  expandClick(
                                    expanded === route.name
                                      ? ''
                                      : route.name
                                  );
                                  toggleSidebar();
                                }}>
                                  <span>
                                    {route.name}
                                    <img
                                      alt='arrow'
                                      className='header-arrow'
                                      src={ICONS[NAMESPACE].headerArrow}
                                    />
                                  </span>
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
                    <Grid
                      container spacing={2}
                      justifyContent='space-between' alignItems='center'
                    >
                      <Grid item xs={4} justifyContent='flex-start'>
                        <div className='footer-legal-links'>
                          {/*<Link to='/legal'>Legal</Link>*/}
                          {/*<Link to='/cookies'>Cookies</Link>*/}
                          <Link to='/privacy-policy'>Privacy Policy</Link>
                          {/*<Link to='/terms'>Terms</Link>*/}
                        </div>
                      </Grid>
                      {!isPrime && (
                        <Grid item xs={4} justifyContent='center'>
                          <div className='footer-legal-prime'>
                            <Link to='/the-prime-group'>
                              Proudly part of <img
                                alt='prime-group'
                                src={isHuddle ? ThePrimeGroup : UnitasThePrimeGroup}
                              />
                            </Link>
                          </div>
                        </Grid>
                      )}
                      <Grid item xs={4} justifyContent='flex-end'>
                        <div className='footer-copyright'>
                          <span>
                            {t(`${NAMESPACE}:footer:copyright`)}
                            {/* todo: make year dynamic */}
                          </span>
                        </div>
                      </Grid>
                    </Grid>
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
