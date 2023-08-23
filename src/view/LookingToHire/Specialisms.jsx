import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {NAMESPACE} from '../../data/constants';
import {isHuddle, groupSpecialisms} from '../../services/helper';
import SearchBar from '../shared/SearchBar';
import ArrowIcon from '../../static/huddle/arrow.svg';
import UnitasSpecialismsArrowIcon from '../../static/unitas/request-arrow.svg';
import UnitasSectorsArrowIcon from '../../static/unitas/black-arrow.svg';

const Specialisms = props => {
  const {type, specialisms} = props;

  const {t} = useTranslation(['huddle', 'unitas']);

  const specialismArrow = isHuddle ? ArrowIcon : UnitasSpecialismsArrowIcon;
  const sectorArrow = isHuddle ? ArrowIcon : UnitasSectorsArrowIcon;
  const arrowIcon = type === 'specialisms' ? specialismArrow : sectorArrow;

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
            <SearchBar placeholder={`Search ${type}...`} />
            <div className='specialism-list-container'>
              <div className='specialism-list'>
                {groupSpecialisms(specialisms).map((group, i) => (
                  <div key={i}>
                    <h5>{group.alphabet}</h5>
                    {group.specialisms.map((specialism, i) => (
                      <Link key={i} to={specialism.path}>
                        {specialism.name}
                        <img alt='arrow-icon' src={arrowIcon} />
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
