import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import InfoContainer from './InfoContainer';
import ContactContainer from './ContactContainer';
import {capitalize} from '../../services/helper';

const SpecialismHero = props => {
  const {
    children,
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

  const headerText = children || `${capitalize(pathname)} ${name}`;

  return (
    <div className='specialism-hero'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='text-container'>
              <div className='title'>
                <h1>
                  {headerText}
                </h1>
              </div>
              <div className='text'>
                <span>
                  Lorem ipsum dolor sit amet consectetur. Nibh bibendum tempor lorem a non mauris hendrerit mauris. Vitae cursus orci vulputate condimentum. Nisi quisque mi tortor suspendisse consequat.
                </span>
                {empty && (
                  <div className='btn-container'>
                    <Link to='/jobs' className='btn btn-secondary'>
                      Browse all jobs
                    </Link>
                  </div>
                )}
              </div>
            </div>
            {!empty && (contact ? (
              <ContactContainer executive={executive} />
            ) : (
              <InfoContainer />
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
