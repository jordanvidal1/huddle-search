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
    document.getElementById('content').scrollTo(0, 0);
  }, [location]);

  return (
    <div /*style={{overflow: sideMenuDisplayed && 'hidden'}} */>
      {/*{isSmallScreenDevice && sidebar()}*/}
      <div /*style={{height: innerHeight}} */>
        {pathname !== '/' && (
          <>
            <TopNav />
            <Header />
            {pathname.includes('/resources') && <ResourcesNav />}
          </>
        )}
        <div id='content' /*className={classes.navChildren} */>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Navigator;
