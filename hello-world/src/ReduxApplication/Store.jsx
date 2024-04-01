import {configureStore} from '@reduxjs/toolkit';
import recipeReducer from './Reducers';

const store=configureStore({
    reducer:{
        recipe:recipeReducer,
    },
});

export default store;