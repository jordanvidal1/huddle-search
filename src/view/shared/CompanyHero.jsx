import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {capitalize} from '@material-ui/core';
import {
  COMPANY_HREFS,
  LEADERS,
  NAMESPACE,
  COMPANY_EMAILS,
  LEADER_ROLES
} from '../../data/constants';
import LinkHref from './LinkHref';

import HuddleLogo from '../../static/prime/huddle-logo-red.svg';
import UnitasLogo from '../../static/prime/unitas-logo-red.svg';
import SpectrumLogo from '../../static/prime/spectrum-logo-red.png';
import HuddleHero from '../../static/prime/tpg-hero-huddle-min.png';
import UnitasHero from '../../static/prime/tpg-hero-unitas-min.png';
import SpectrumHero from '../../static/prime/tpg-hero-spectrum-min.png';

import {ReactComponent as Company} from '../../static/icons/laptop.svg';
import {ReactComponent as Phone} from '../../static/icons/phone.svg';
import {ReactComponent as Email} from '../../static/icons/email.svg';
import {ReactComponent as Location} from '../../static/icons/location.svg';
import {ReactComponent as LinkedIn} from '../../static/icons/linkedin-sm.svg';

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
                      {t(`${NAMESPACE}:companyHero:service:header`)}
                    </span>
                    <span>
                      {t(`${NAMESPACE}:companyHero:service:type`)}
                    </span>
                  </div>
                  <div className='sector'>
                    <span>
                      {t(`${NAMESPACE}:companyHero:sector:header`)}
                    </span>
                    <span>
                      {t(`${NAMESPACE}:companyHero:sector:${company}`)}
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
                  {t(`${NAMESPACE}:companyHero:content:desc`)}
                </p>
                <div className='company-contact'>
                  <div>
                    <LinkHref href={COMPANY_HREFS[company]}>
                      <Company />
                      {t(`${NAMESPACE}:companyHero:contact:company:${company}`)}
                    </LinkHref>
                  </div>
                  <div>
                    <a href={`tel:${t(`${NAMESPACE}:companyHero:contact:phone:${company}`)}`}>
                      <Phone />
                      <span>{t(`${NAMESPACE}:companyHero:contact:phone:${company}`)}</span>
                    </a>
                  </div>
                  <div>
                    <a href={`mailto:${t(`${NAMESPACE}:companyHero:contact:email:${company}`)}`}>
                      <Email />
                      <span>
                        {t(`${NAMESPACE}:companyHero:contact:email:${company}`)}
                      </span>
                    </a>
                  </div>
                  <div>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${t(`${NAMESPACE}:companyHero:contact:location:${company}`)}`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <Location />
                      <span>
                        {t(`${NAMESPACE}:companyHero:contact:location:${company}`)}
                      </span>
                    </a>
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
                        {LEADER_ROLES[company]?.[boss.id]}
                      </span>
                      <p>
                        {boss.description}
                      </p>
                    </div>
                    <div className='boss-contact'>
                      {boss.number && (
                        <div>
                          <a href={`tel:${boss.number}`}>
                            <Phone />
                            <span>{boss.number}</span>
                          </a>
                        </div>
                      )}
                      <div>
                        <a href={`mailto:${COMPANY_EMAILS[company]}`}>
                          <Email />
                          <span>{COMPANY_EMAILS[company]}</span>
                        </a>
                      </div>
                      <div>
                        <a href={boss.linkedin} rel='noreferrer' target='_blank'>
                          <LinkedIn />
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
