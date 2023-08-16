import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {getNamespace} from '../../services/helper';
import SearchBar from '../shared/SearchBar';
import ArrowIcon from '../../static/huddle/arrow.svg';

const Specialisms = props => {
  const {type, specialisms} = props;

  const {t} = useTranslation(['huddle', 'unitas']);

  return (
    <div className={`specialisms ${type}`}>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='text-container'>
              <div className='title'>
                <h2>
                  {t(`${getNamespace}:lookingToHire:${type}:title`)}
                </h2>
              </div>
              <div className='text'>
                <p>
                  {t(`${window.SITE_NAME}:lookingToHire:${type}:desc`)}
                </p>
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
