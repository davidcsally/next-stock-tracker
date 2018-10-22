/* eslint-disable import/prefer-default-export, no-underscore-dangle */
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import throttle from 'lodash/throttle';

import { saveState, loadState } from './localStorage';
import reducers from '../reducers';
import rootSaga from '../sagas';

const combinedReducers = combineReducers(reducers);
const sagaMiddleware = createSagaMiddleware();

/**
 * next.js make store options
 *
* @param {object} initialState
* @param {boolean} options.isServer indicates whether it is a server side or client side
* @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
* @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
*/

export const makeStore = (initialState, options) => {
  // probably can change redux dev tools to check isServer
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  // load state from local storage
  const persistedState = loadState();

  const store = createStore(
    combinedReducers,
    persistedState || initialState, // load saved state
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );

  // save state to local storage
  store.subscribe(throttle(() => {
    const state = store.getState();
    saveState(state);
  }, 1000));

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };

  // run the rootSaga initially
  store.runSagaTask();

  return store;
};
