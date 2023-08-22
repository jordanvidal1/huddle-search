import React from 'react';
import {
  Route,
  Routes,
  BrowserRouter,
  Navigate
} from 'react-router-dom';
import {hot} from 'react-hot-loader/root';
import {CssBaseline} from '@material-ui/core';

import Navigator from '../shared/Navigator';
import Home from '../Home';

import LookingToHire from '../LookingToHire';
import LookingForAJob from '../LookingForAJob';
import ExecutiveSearch from '../ExecutiveSearch';
import EmbeddedTalent from '../EmbeddedTalent';
import ContractInterim from '../ContractInterim';

import Jobs from '../Jobs';
import Resources from '../Resources';
import Specialism from '../Specialism';

// import Job from '../Jobs/Job';
import Resource from '../Resources/Resource';

import LeadershipTeam from '../LeadershipTeam';
import OurStory from '../OurStory';
import OurProcess from '../OurProcess';
import WorkForUs from '../WorkForUs';
import ContactUs from '../ContactUs';

import PrivacyPolicy from '../Legal/PrivacyPolicy';

const RouterComponent = () => (
  <BrowserRouter>
    <CssBaseline/>
    <Navigator>
      <Routes>
        <Route path='/' Component={Home} />
        <Route exact path='/jobs' Component={Jobs} />
        {/*<Route path='/jobs/:id' Component={Job} />*/}
        <Route exact path='/resources' Component={Resources} />
        <Route path='/resources/:id' Component={Resource} />
        <Route path='/specialisms' Component={Specialism} />
        {/*<Route path='/specialisms/:id' Component={Specialism}/>*/}
        <Route path='/sectors' Component={Specialism} />
        {/*<Route path='/sectors/:id' Component={Specialism} />*/}

        <Route path='/looking-to-hire' Component={LookingToHire} />
        <Route path='/looking-for-a-job' Component={LookingForAJob} />
        <Route path='/executive-search' Component={ExecutiveSearch} />
        <Route path='/embedded-talent-solutions' Component={EmbeddedTalent} />
        <Route path='/contract-interim' Component={ContractInterim} />

        <Route path='/leadership-team' Component={LeadershipTeam} />
        <Route path='/our-story' Component={OurStory} />
        <Route path='/our-process' Component={OurProcess} />
        <Route path='/work-for-us' Component={WorkForUs} />
        <Route path='/contact-us' Component={ContactUs} />

        <Route path='/privacy-policy' Component={PrivacyPolicy} />

        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </Navigator>
  </BrowserRouter>
);

export default hot(RouterComponent);
