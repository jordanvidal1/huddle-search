import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {getNamespace} from '../../services/helper';

import InfoContainer from './InfoContainer';
import ContactContainer from './ContactContainer';

const SpecialismHero = props => {
  const {
    children,
    type,
    name,
    contact,
    executive,
    empty
  } = props;

  const [pathname, setPathname] = useState('/');

  const location = useLocation();

  useEffect(() => {
    setPathname(`${location.pathname.split('/')[1]}`);
  }, [location]);

  const {t} = useTranslation(['huddle', 'unitas']);

  return (
    <div className='specialism-hero'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='text-container'>
              <div className='title'>
                <h1>
                  {children || t(`${getNamespace}:specialismHero:title:${pathname}`, {name})}
                </h1>
              </div>
              <div className='text'>
                <p>
                  {t(`${getNamespace}:specialismHero:desc:${type}`)}
                </p>
                {empty && (
                  <div className='btn-container'>
                    <Link to='/jobs' className='btn btn-secondary'>
                      {t(`${getNamespace}:specialismHero:button`)}
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
