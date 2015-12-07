import { Map } from 'immutable';
import Rx from 'rx';
import { createStore, applyMiddleware } from '../../lib/index';
import logger from './middleware/logger';

let initialState = Map({ counter: 0 });
let createStoreWithMiddleware = applyMiddleware(logger)(createStore);

export default createStoreWithMiddleware(initialState);
