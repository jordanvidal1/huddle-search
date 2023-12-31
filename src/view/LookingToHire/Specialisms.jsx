import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {NAMESPACE} from '../../data/constants';
import {groupSpecialisms} from '../../services/helper';
// import SearchBar from '../shared/SearchBar';

import {ReactComponent as Arrow} from '../../static/icons/arrow.svg';

const Specialisms = props => {
  const {type, specialisms} = props;

  const {t} = useTranslation(['huddle', 'unitas', 'prime']);

  return (
    <div className={`specialisms ${type}`}>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='text-container'>
              <div className='title'>
                <h2>
                  {t(`${NAMESPACE}:lookingToHire:${type}:title`)}
                </h2>
              </div>
              <div className='text'>
                <p>
                  {t(`${NAMESPACE}:lookingToHire:${type}:desc`)}
                </p>
              </div>
            </div>
            {/*<SearchBar placeholder={`Search ${type}...`} />*/}
            <div className='specialism-list-container'>
              <div className='specialism-list'>
                {groupSpecialisms(specialisms).map((group, i) => (
                  <div key={i}>
                    <h5>{group.alphabet}</h5>
                    {group.specialisms.map((specialism, i) => (
                      <Link key={i} to={specialism.path}>
                        {specialism.name}
                        <Arrow />
                      </Link>
                    ))}
                  </div>
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
