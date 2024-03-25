const redux=require('redux');
const reduxLogger=require('redux-logger');

const createStore=redux.createStore;
const combineReducers=redux.combineReducers;
const logger=reduxLogger.createLogger();
const applyMiddleware=redux.applyMiddleware();
//import {createStore} from '@reduxjs/toolkit';

const Buy_Salwar='Buy_Salwar';
const Buy_Saree='Buy_Saree';

function newSalwar(){
    return{
        type: Buy_Salwar
        
    };
}

function newSaree(){
    return{
        type: Buy_Saree
    };
}

// const initialState={
//     numOfSalwars:15,
//     numOfSarees:20
// };

const initialSalwarState={
    numOfSalwars:15
};

const initialSareeState={
    numOfSarees:20
};

const salwarReducer=(state=initialSalwarState,action)=>{
    switch(action.type){
    case Buy_Salwar:return{
        ...state,
        numOfSalwars:state.numOfSalwars -1
    };
    default: return state;
    }
};
const sareeReducer=(state=initialSareeState,action)=>{
    switch(action.type){
    case Buy_Saree:return{
        ...state,
        numOfSarees:state.numOfSarees -1
    };
    default: return state;
    }
};

// const reducer=(state=initialState,action)=>{
//     switch(action.type){
//     case Buy_Salwar:return{
//         ...state,
//         numOfSalwars:state.numOfSalwars -1
//     };

//     case Buy_Saree:return{
//         ...state,
//         numOfSarees:state.numOfSarees -1
//     };
//     default: return state;
//     }
// };


const rootReducer=combineReducers({
    salwar:salwarReducer,
    saree:sareeReducer
});

const store=createStore(rootReducer,applyMiddleware(logger));
console.log('Initial state',store.getState());
//const unsubscribe=store.subscribe(()=> console.log('Updated State',store.getState()));

const unsubscribe=store.subscribe(()=>{});
store.dispatch(newSalwar());
store.dispatch(newSalwar());
store.dispatch(newSalwar());
store.dispatch(newSaree());
store.dispatch(newSaree());
unsubscribe();
