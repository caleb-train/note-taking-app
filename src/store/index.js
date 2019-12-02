/* import {
  createStore,
  applyMiddleware
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
  composeWithDevTools
} from 'redux-devtools-extension/developmentOnly';
import combineReducers from './reducers';

import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = applyMiddleware(sagaMiddleware);

const makeStore = (initialState) => {
  const store = createStore(
    combineReducers,
    initialState,
    composeWithDevTools(middlewares),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default makeStore; */
import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';


export const initStore = (initialState = {}) => {
  return createStore(reducer, initialState, applyMiddleware(thunk));
};