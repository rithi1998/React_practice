import React from 'react';
import './App.css';
//import NewForm from './Forms';
// import UncontrolForm from './UncontrolledForms';
//import UserInput from './ForwardingRef/ParentInput';
//import Routing from './Routing/ConfigureRoutes';
import RecipeFinder from './ReduxApplication/FindRecipe';
import store from './ReduxApplication/Store';
import { Provider } from 'react-redux';

export default function App() {
  
    return (
        <Provider store={store}>
            <div>
                <RecipeFinder/>      

            </div>
        </Provider>
    );
}


