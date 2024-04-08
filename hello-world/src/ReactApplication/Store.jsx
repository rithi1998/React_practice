import {configureStore} from '@reduxjs/toolkit';
import { combineReducers} from 'redux';
import leaveDetailsReducer from './Reducers';

const rootReducer=combineReducers({
    leave:leaveDetailsReducer
});

const store=configureStore({
    reducer:rootReducer
});

export default store;