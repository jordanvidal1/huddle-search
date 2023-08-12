import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {capitalize} from '../../services/helper';
import SearchBar from '../shared/SearchBar';
import ArrowIcon from '../../static/arrow.svg';

const Specialisms = props => {
  const {type, name, specialisms} = props;

  const {t} = useTranslation(['huddle']);

  const headerText = name
    ? `${capitalize(type)} in ${name}`
    : capitalize(type);

  return (
    <div className={`specialisms ${type}`}>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='text-container'>
              <div className='title'>
                <h2>
                  {headerText}
                </h2>
              </div>
              <div className='text'>
                <span>
                  {t(`huddle:lookingToHire:${type}:desc`)}
                </span>
              </div>
            </div>
            <SearchBar placeholder={`Search ${type}...`} />
            {/* todo: mobile placeholder */}
            <div className='specialism-list-container'>
              <div className='specialism-list'>
                {/*<h5>*/}
                {/*  A*/}
                {/*</h5>*/}
                {specialisms.map((specialism) => (
                  <Link to={specialism.path}>
                    {specialism.name}
                    <img alt='arrow-icon' src={ArrowIcon} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specialisms;

Specialisms.defaultProps = {
  specialisms: [
    {name: 'Specialism', path: ''},
    {name: 'Specialism', path: ''},
    {name: 'Specialism', path: ''},
    {name: 'Specialism', path: ''},
    {name: 'Specialism', path: ''},
    {name: 'Specialism', path: ''},
    {name: 'Specialism', path: ''},
    {name: 'Specialism', path: ''},
    {name: 'Specialism', path: ''},
    {name: 'Specialism', path: ''},
    {name: 'Specialism', path: ''},
    {name: 'Specialism', path: ''},
  ]
};
