import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {capitalize} from '@material-ui/core';
import {COMPANY_HREFS, LEADERS, NAMESPACE} from '../../data/constants';
import LinkHref from './LinkHref';

import HuddleLogo from '../../static/prime/huddle-logo-red.svg';
import UnitasLogo from '../../static/prime/unitas-logo-red.svg';
import SpectrumLogo from '../../static/prime/spectrum-logo-red.png';
import HuddleHero from '../../static/prime/tpg-hero-huddle-min.png';
import UnitasHero from '../../static/prime/tpg-hero-unitas-min.png';
import SpectrumHero from '../../static/prime/tpg-hero-spectrum-min.png';

import CompanyIcon from '../../static/prime/company.svg';
import PhoneIcon from '../../static/prime/phone-white-thick.svg';
import EmailIcon from '../../static/prime/email-white-thick.svg';
import LocationIcon from '../../static/prime/visit-white.svg';
import LinkedInIcon from '../../static/prime/linkedin-white.svg';

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

const CompanyHero = ({company}) => {
  const [boss, setBoss] = useState({});

  const {t} = useTranslation(['huddle', 'unitas', 'prime']);

  useEffect(() => {
    setBoss(LEADERS[company]?.[0]);
  }, [company]);

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
                    <LinkHref href={COMPANY_HREFS[company]}>
                      <img
                        alt='company-icon'
                        src={CompanyIcon}
                      />
                      {t(`${NAMESPACE}:companyHero:contact:company:${company}`)}
                    </LinkHref>
                  </div>
                  <div>
                    <img alt='phone-icon' src={PhoneIcon} />
                    <span>{t(`${NAMESPACE}:companyHero:contact:phone:${company}`)}</span>
                  </div>
                  <div>
                    <a href={`mailto:${t(`${NAMESPACE}:companyHero:contact:email:${company}`)}`}>
                      <img alt='email-icon' src={EmailIcon} />
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
              {boss && (
                <div className='boss-content'>
                  <div className='divider' />
                  <h5>
                    {t(`${NAMESPACE}:companyHero:boss:title`)}
                  </h5>
                  <div className='boss'>
                    <div className='boss-img-container'>
                      <img alt='boss-img' src={boss.img} />
                    </div>
                    <div className='boss-details'>
                      <h5>
                        {boss.name}
                      </h5>
                      <span>
                        {boss.role}
                      </span>
                      <p>
                        {boss.description}
                      </p>
                    </div>
                    <div className='boss-contact'>
                      {boss.number && (
                        <div>
                          <img
                            alt='phone-number-icon'
                            src={PhoneIcon}
                          />
                          <span>{boss.number}</span>
                        </div>
                      )}
                      <div>
                        <a href={`mailto:${boss.email}`}>
                          <img
                            alt='email-icon'
                            src={EmailIcon}
                          />
                          <span>{boss.email}</span>
                        </a>
                      </div>
                      <div>
                        <a href={boss.linkedin} rel='noreferrer' target='_blank'>
                          <img
                            alt='linkedin-icon'
                            src={LinkedInIcon}
                          />
                          <span>LinkedIn profile</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyHero;
