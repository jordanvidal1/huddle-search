import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import {useTranslation} from 'react-i18next';
import {Grid} from '@material-ui/core';
import {
  NAMESPACE,
  SECTORS,
  SOCIAL_HREFS,
  SPECIALISMS,
} from '../../data/constants';
import {isHuddle, isPrime} from '../../services/helper';
import LinkHref from '../shared/LinkHref';

import TextLogo from '../../static/huddle/text-logo.svg';
import HuddleLogo from '../../static/huddle/full-logo.svg';
import UnitasLogo from '../../static/unitas/full-logo.svg';
import PrimeLogo from '../../static/prime/full-logo.svg';

import ThePrimeGroup from '../../static/huddle/the-prime-group.svg';
import UnitasThePrimeGroup from '../../static/unitas/the-prime-group.svg';

import {ReactComponent as Phone} from '../../static/icons/phone.svg';
import {ReactComponent as Email} from '../../static/icons/email.svg';
import {ReactComponent as Location} from '../../static/icons/location.svg';
import {ReactComponent as LinkedIn} from '../../static/icons/linkedin.svg';
// import {ReactComponent as X} from '../../static/icons/x.svg';
// import {ReactComponent as Facebook} from '../../static/icons/facebook.svg';
// import {ReactComponent as Instagram} from '../../static/icons/instagram.svg';
import {ReactComponent as Chevron} from '../../static/icons/chevron.svg';

const LOGOS = {
  huddle: HuddleLogo,
  unitas: UnitasLogo,
  prime: PrimeLogo,
};

const discoverRoutes = isPrime ?
  [
    {
      name: 'Huddle',
      path: '/companies/huddle'
    },
    {
      name: 'Unitas',
      path: '/companies/unitas'
    },
    {
      name: 'Spectrum',
      path: '/companies/spectrum'
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

const Footer = ({
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
                          src={LOGOS[NAMESPACE]}
                        />
                        <p>{t(`${NAMESPACE}:footer:slogan`)}</p>
                      </div>
                      <div className='footer-contact'>
                        <div>
                          <a href={`tel:${t(`${NAMESPACE}:footer:number`)}`}>
                            <Phone />
                            <span>{t(`${NAMESPACE}:footer:number`)}</span>
                          </a>
                        </div>
                        <div>
                          <Email />
                          <a href={`mailto:${t(`${NAMESPACE}:footer:email`)}`}>
                            <span>
                              {t(`${NAMESPACE}:footer:email`)}
                            </span>
                          </a>
                        </div>
                        <div>
                          <Location />
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${t(`${NAMESPACE}:footer:address`)}`}
                            target='_blank'
                            rel='noreferrer'
                          >
                            <span>
                              {t(`${NAMESPACE}:footer:address`)}
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className='footer-socials'>
                        <LinkHref href={SOCIAL_HREFS[NAMESPACE].linkedin}>
                          <LinkedIn />
                        </LinkHref>
                        {/*<LinkHref href={SOCIAL_HREFS[NAMESPACE].twitter}>*/}
                        {/*  <X />*/}
                        {/*</LinkHref>*/}
                        {/*<LinkHref href={SOCIAL_HREFS[NAMESPACE].facebook}>*/}
                        {/*  <Facebook />*/}
                        {/*</LinkHref>*/}
                        {/*<LinkHref href={SOCIAL_HREFS[NAMESPACE].instagram}>*/}
                        {/*  <Instagram />*/}
                        {/*</LinkHref>*/}
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
                                  expandClick(route.name);
                                  toggleSidebar();
                                }}>
                                  <span>
                                    {route.name}
                                    <Chevron />
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
                                  expandClick(route.name);
                                  toggleSidebar();
                                }}>
                                  <span>
                                    {route.name}
                                    <Chevron />
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
                            {t(`${NAMESPACE}:footer:copyright`, {
                              year: new Date().getFullYear()
                            })}
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
