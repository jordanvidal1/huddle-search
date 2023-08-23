import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {NAMESPACE} from '../../data/constants';
import InfoContainer from './InfoContainer';
import ContactContainer from './ContactContainer';
import Loader from './Loader';

const SpecialismHero = props => {
  const {
    children,
    type,
    specialism,
    pathname,
    slug,
    button,
    contact,
    executive,
    empty
  } = props;

  const {t} = useTranslation(['huddle', 'unitas']);

  const title = pathname !== ''
    ? t(`${NAMESPACE}:specialismHero:title:${pathname}`, {
      name: specialism?.name,
      interpolation: {escapeValue: false}
    })
    : <Loader />

  return (
    <div className='specialism-hero'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='text-container'>
              <div className='title'>
                {specialism && <img alt='specialism-icon' src={specialism.icon}/>}
                <h1>
                  {children || title}
                </h1>
              </div>
              <div className='text'>
                <p>
                  {specialism
                    ? t(`${NAMESPACE}:${pathname}:${slug}`)
                    : t(`${NAMESPACE}:specialismHero:desc:${type}`)
                  }
                </p>
                {button && (
                  <div className='btn-container'>
                    <Link to='/jobs' className='btn btn-secondary'>
                      {t(`${NAMESPACE}:specialismHero:button`)}
                    </Link>
                  </div>
                )}
              </div>
            </div>
            {!empty && (contact ? (
              <ContactContainer t={t} executive={executive} />
            ) : (
              <InfoContainer t={t} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialismHero;
