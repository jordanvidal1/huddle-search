import React from 'react';
import {Link} from 'react-router-dom';
import InfoContainer from '../InfoContainer';
import ContactContainer from '../ContactContainer';
import './styles.scss';

const SpecialismHero = props => {
  const {
    children,
    name,
    contact,
    executive,
    empty
  } = props;

  const headerText = children || `Specialism ${name}`;

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
                    <Link to='/jobs'>
                      <button className='btn btn-secondary'>
                        Browse all jobs
                      </button>
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
