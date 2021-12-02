import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import config from './config/reducer';

export default createStore(combineReducers({ config }), applyMiddleware(thunk));
