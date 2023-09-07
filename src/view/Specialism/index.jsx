import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {NAMESPACE, SECTORS, SPECIALISMS} from '../../data/constants';
import {isHuddle} from '../../services/helper';

import Hero from '../shared/SpecialismHero';
import TypesOfRoles from './TypesOfRoles';
import Specialists from '../shared/Specialists';

// import RolesPage from '../shared/RolesPage';
import ResourcesPage from '../shared/ResourcesPage';

import SpecialismHeroImg from '../../static/unitas/specialism.png';
import SectorHeroImg from '../../static/unitas/sector.png';

const ignoreList = {
  roles: [],
  technologies: ['product-management']
};

const Specialism = () => {
  const [pathname, setPathname] = useState('');
  const [slug, setSlug] = useState('');
  const [specialism, setSpecialism] = useState({});

  const location = useLocation();
  const isSpecialism = pathname.indexOf('specialisms') > -1;

  useEffect(() => {
    setPathname(`${location.pathname.split('/')[1]}`);
    setSlug(`${location.pathname.split('/')[2]}`);
  }, [location]);

  useEffect(() => {
    const array = isSpecialism
      ? SPECIALISMS[NAMESPACE]
      : SECTORS[NAMESPACE];
    setSpecialism(array.find(i => i.path === location.pathname));
  }, [pathname, slug]);

  const heroImg = isSpecialism
    ? SpecialismHeroImg
    : SectorHeroImg;

  return (
    <div className='specialism'>
      <Hero
        img={!isHuddle && heroImg}
        specialism={specialism}
        pathname={pathname}
        slug={slug}
      />
      {isHuddle && isSpecialism && (
        <>
          {ignoreList.roles.indexOf(slug) < 0 && (
            <TypesOfRoles
              type='roles'
              specialism={specialism}
              pathname={pathname}
              slug={slug}
            />
          )}
          {ignoreList.technologies.indexOf(slug) < 0 && (
            <TypesOfRoles
              type='technologies'
              specialism={specialism}
              pathname={pathname}
              slug={slug}
            />
          )}
        </>
      )}
      {/*<RolesPage />*/}
      <Specialists type='specialists' name={specialism?.name} />
      <ResourcesPage />
    </div>
  );
}

export default Specialism;
