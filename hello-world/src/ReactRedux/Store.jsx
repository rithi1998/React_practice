import {combineReducers, createStore} from 'redux';
import sareeReducer from './SareeReducer';
import kurtiReducer from './KurtiReducer';
import logger from 'redux-logger';
import { applyMiddleware } from 'redux';

const rootReducer=combineReducers({
    saree: sareeReducer,
    kurti: kurtiReducer
});
const store=createStore(rootReducer,applyMiddleware(logger));

export default store;