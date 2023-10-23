import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {capitalize} from '@material-ui/core';
import {COMPANY_HREFS, NAMESPACE} from '../../data/constants';
import LinkHref from './LinkHref';

import HuddleLogo from '../../static/prime/huddle-logo-red.svg';
import UnitasLogo from '../../static/prime/unitas-logo-red.svg';
import SpectrumLogo from '../../static/prime/spectrum-logo-red.svg';
import HuddleHero from '../../static/prime/tpg-hero-huddle-min.png';
import UnitasHero from '../../static/prime/tpg-hero-unitas-min.png';
import SpectrumHero from '../../static/prime/tpg-hero-spectrum-min.png';

import CompanyIcon from '../../static/prime/company.svg';
import PhoneIcon from '../../static/prime/phone-white.svg';
import EmailIcon from '../../static/prime/email-white.svg';
import LocationIcon from '../../static/prime/visit-white.svg';

const LOGOS = {
  huddle: HuddleLogo,
  unitas: UnitasLogo,
  spectrum: SpectrumLogo
};

const IMAGES = {
  huddle: HuddleHero,
  unitas: UnitasHero,
  spectrum: SpectrumHero
};

const CompanyHero = () => {
  const [company, setCompany] = useState('');

  const {t} = useTranslation(['huddle', 'unitas', 'prime']);

  const location = useLocation();

  useEffect(() => {
    setCompany(`${location.pathname.split('/')[2]}`);
  }, [location]);

  return (
    <div className='company-hero'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='text-container'>
              <img alt='hero-img' src={IMAGES[company]} />
              <div className='title'>
                <img alt='company-logo' src={LOGOS[company]} />
                <h1>
                  {t(`${NAMESPACE}:companyHero:title:${company}`)}
                </h1>
                <div className='details'>
                  <div className='service'>
                    <span>
                      {t(`${NAMESPACE}:companyHero:service`)}
                    </span>
                    <span>
                      {t(`${NAMESPACE}:companyHero:recruitment`)}
                    </span>
                  </div>
                  <div className='sector'>
                    <span>
                      {t(`${NAMESPACE}:companyHero:sector`)}
                    </span>
                    <span>
                      {t(`${NAMESPACE}:companyHero:recruitment`)}
                    </span>
                  </div>
                </div>
              </div>
              <div className='text'>
                <p>
                  {t(`${NAMESPACE}:companyHero:desc:${company}`)}
                </p>
                <div className='btn-container'>
                  <LinkHref href={COMPANY_HREFS[company]} className="btn btn-primary">
                    {t(`${NAMESPACE}:companyHero:button`)}
                  </LinkHref>
                </div>
              </div>
            </div>
            <div className='company-container'>
              <div className='company-content'>
                <h2>
                  {t(`${NAMESPACE}:companyHero:content:title`, {siteName: capitalize(company)})}
                </h2>
                <p>
                  {t(`${NAMESPACE}:companyHero:content:desc:${company}`)}
                </p>
                <div className='company-contact'>
                  <div>
                    <img
                      alt='company-icon'
                      src={CompanyIcon}
                    />
                    <LinkHref href={COMPANY_HREFS[company]}>
                      {t(`${NAMESPACE}:companyHero:contact:company:${company}`)}
                    </LinkHref>
                  </div>
                  <div>
                    <img alt='phone-icon' src={PhoneIcon} />
                    <span>{t(`${NAMESPACE}:companyHero:contact:phone:${company}`)}</span>
                  </div>
                  <div>
                    <img alt='email-icon' src={EmailIcon} />
                    <a href={`mailto:${t(`${NAMESPACE}:companyHero:contact:email:${company}`)}`}>
                      <span>
                        {t(`${NAMESPACE}:companyHero:contact:email:${company}`)}
                      </span>
                    </a>
                  </div>
                  <div>
                    <img alt='location-icon' src={LocationIcon} />
                    <span>{t(`${NAMESPACE}:companyHero:contact:location:${company}`)}</span>
                  </div>
                </div>
              </div>
              <div className='divider' />
              <div className='boss-content'>
                <h5>
                  {t(`${NAMESPACE}:companyHero:boss:title`)}
                </h5>
                {/*<div key={i} className='specialist'>*/}
                {/*  <div className='specialist-img-container'>*/}
                {/*    <img alt='specialist-img' src={img} />*/}
                {/*  </div>*/}
                {/*  <div className='specialist-details'>*/}
                {/*    <h5>*/}
                {/*      {name}*/}
                {/*    </h5>*/}
                {/*    <span>*/}
                {/*        {role}*/}
                {/*      </span>*/}
                {/*    <p>*/}
                {/*      {description}*/}
                {/*    </p>*/}
                {/*  </div>*/}
                {/*  <div className='specialist-contact'>*/}
                {/*    {number && (*/}
                {/*      <div>*/}
                {/*        <img*/}
                {/*          alt='phone-number-icon'*/}
                {/*          src={phoneIcon}*/}
                {/*        />*/}
                {/*        <span>{number}</span>*/}
                {/*      </div>*/}
                {/*    )}*/}
                {/*    <div>*/}
                {/*      <a href={`mailto:${email}`}>*/}
                {/*        <img*/}
                {/*          alt='email-icon'*/}
                {/*          src={emailIcon}*/}
                {/*        />*/}
                {/*        <span>{email}</span>*/}
                {/*      </a>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*      <a href={linkedin} rel='noreferrer' target='_blank'>*/}
                {/*        <img*/}
                {/*          alt='linkedin-icon'*/}
                {/*          src={linkedInIcon}*/}
                {/*        />*/}
                {/*        <span>LinkedIn profile</span>*/}
                {/*      </a>*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyHero;
