import { createStore, applyMiddleware } from 'redux';
import { createPromise } from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import rootReducer from './modules';

const promiseMiddleware = createPromise({
  promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'FAILURE'],
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, promiseMiddleware)
);

export default store;
