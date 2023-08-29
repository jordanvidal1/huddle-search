import React from 'react';
import ReactDOM from 'react-dom/client';
import {combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {createReduxStore} from '../../data/core/store';
import Loader from '../shared/Loader';
import '../../data/fn';

export default (App, reducers, domContainer = 'root') => {
  const combinedReducers = combineReducers(reducers);
  const store = createReduxStore(combinedReducers);

  const ProvidedApp = () => (
    <Provider store={store}>
      <React.Suspense fallback={
        <div id='fallback'>
          <Loader />
        </div>
      }>
        <App />
      </React.Suspense>
    </Provider>
  );

  const root = ReactDOM.createRoot(
    document.getElementById('root')
  );

  root.render(
    <ProvidedApp />
  );
};
