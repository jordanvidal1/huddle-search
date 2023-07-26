import React from 'react';
import Home from './Home/index.jsx';
import LookingToHire from './LookingToHire';
import LookingForAJob from './LookingForAJob';
import SearchRoles from './SearchRoles';
import ExecutiveSearch from './ExecutiveSearch';
import EmbeddedTalent from './EmbeddedTalent';
import WorkForUs from './WorkForUs';
import Footer from './Footer';

// import i18n from 'i18next';
// import Backend from 'i18next-xhr-backend';
// import {setupI18n} from '@coinburp-staking/common/i18n';
// import {initReactI18next} from '@coinburp-staking/common-ui/src/lib/i18next';
// import bootstrap from './core/AppRoot';
// import {supportedLocales, basePathLocales} from '../../locales/config';
// import Router from './core/Router';

const App = () => (
  <div className='App'>
    <Home />
    <LookingToHire />
    <LookingForAJob />
    <SearchRoles />
    <ExecutiveSearch />
    <EmbeddedTalent />
    <WorkForUs />
    <Footer />
  </div>
);

export default App;

// setupI18n(i18n, Backend, supportedLocales, initReactI18next, basePathLocales);
// bootstrap(App, {});
