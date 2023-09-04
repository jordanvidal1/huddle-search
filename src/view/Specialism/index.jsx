import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {NAMESPACE, SECTORS, SPECIALISMS} from '../../data/constants';
import {isHuddle} from '../../services/helper';

import Hero from '../shared/SpecialismHero';
import Specialists from '../shared/Specialists';

// import RolesPage from '../shared/RolesPage';
import ResourcesPage from '../shared/ResourcesPage';

import SpecialismHeroImg from '../../static/unitas/specialism.png';
import SectorHeroImg from '../../static/unitas/sector.png';

const Specialism = () => {
  const [pathname, setPathname] = useState('');
  const [slug, setSlug] = useState('');
  const [specialism, setSpecialism] = useState({});

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

  const heroImg = pathname.indexOf('specialisms') > -1
    ? SpecialismHeroImg
    : SectorHeroImg;

  return (
    <div className='specialism'>
      <Hero
        type='specialists'
        img={!isHuddle && heroImg}
        specialism={specialism}
        pathname={pathname}
        slug={slug}
      />
      {/*<RolesPage />*/}
      <Specialists type='specialists' name={specialism?.name} />
      <ResourcesPage />
    </div>
  );
}

export default Specialism;
