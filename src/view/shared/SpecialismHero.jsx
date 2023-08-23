import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {NAMESPACE, SECTORS, SPECIALISMS} from '../../data/constants';
import InfoContainer from './InfoContainer';
import ContactContainer from './ContactContainer';

const SpecialismHero = props => {
  const {
    children,
    type,
    contact,
    executive,
    empty
  } = props;

  const [pathname, setPathname] = useState('/');
  const [slug, setSlug] = useState('/');
  const [specialism, setSpecialism] = useState();

  const location = useLocation();

  useEffect(() => {
    setPathname(`${location.pathname.split('/')[1]}`);
    setSlug(`${location.pathname.split('/')[2]}`);
  }, [location]);

  useEffect(() => {
    const array = pathname.indexOf('specialisms') > -1
      ? SPECIALISMS[NAMESPACE]
      : SECTORS[NAMESPACE];
    setSpecialism(array.find(i => i.path === location.pathname));
  }, [pathname, slug]);

  const {t} = useTranslation(['huddle', 'unitas']);

  return (
    <div className='specialism-hero'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='text-container'>
              <div className='title'>
                {specialism && <img alt='specialism-icon' src={specialism.icon}/>}
                <h1>
                  {children
                    || t(`${NAMESPACE}:specialismHero:title:${pathname}`, {
                      name: specialism?.name,
                      interpolation: {escapeValue: false}
                    })
                  }
                </h1>
              </div>
              <div className='text'>
                <p>
                  {specialism
                    ? t(`${NAMESPACE}:${pathname}:${slug}`)
                    : t(`${NAMESPACE}:specialismHero:desc:${type}`)
                  }
                </p>
                {empty && (
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

SpecialismHero.defaultProps = {
  name: '{name}'
};
