// create a store that has redux-thunk middleware enabled

/* eslint-disable no-underscore-dangle */
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import taskMiddleware from '../middleware/taskMiddleware';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create a store that has redux-thunk middleware enabled
let store;

export const createReduxStore = reducer => {
  store = createStore(
    reducer,
    {},
    composeEnhancer(applyMiddleware(taskMiddleware, thunk))
  );

  return store;
};
