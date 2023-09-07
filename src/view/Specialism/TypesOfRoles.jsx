import React from 'react';
import {useTranslation} from 'react-i18next';
import {NAMESPACE} from '../../data/constants';

const TypesOfRoles = props => {
  const {type, specialism, pathname, slug} = props;

  const {t} = useTranslation(['huddle', 'unitas']);

  const ts = t(`${NAMESPACE}:typesOfRoles:${pathname}:${slug}:${type}`);
  const list = ts.split('|').sort();

  return (
    <div className={`types-of-roles ${type}`}>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='text-container'>
              <div className='title'>
                <h2>
                  {t(`${NAMESPACE}:typesOfRoles:title:${type}`, {
                    specialism: specialism?.name
                  })}
                </h2>
              </div>
              <div className='text'>
                <p>
                  {t(`${NAMESPACE}:typesOfRoles:desc:${type}`)}
                </p>
              </div>
            </div>
            <div className='roles-list'>
              <ul>
                {list.map((role, i) => (
                  <p key={i}>{role}</p>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypesOfRoles;
