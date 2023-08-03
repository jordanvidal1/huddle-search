import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom'

import Header from '../Header';
import TopNav from '../TopNav';
import ResourcesNav from '../ResourcesNav';
import Footer from '../Footer';

import './styles.scss';

const Navigator = ({
  children
}) => {
  const [pathname, setPathname] = useState('/');

  const location = useLocation();

  useEffect(() => {
    setPathname(`/${location.pathname.split('/')[1]}`);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      {pathname !== '/' && (
        <>
          <TopNav />
          <Header />
          {pathname.includes('/resources') && <ResourcesNav />}
        </>
      )}
      <div id='content'>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Navigator;
