import React,{ useContext } from 'react';
import ChildC from './ChildC';
import { UserContext } from './Context';
 
export default function ChildB(){
 
    const user= useContext(UserContext);
 
    return(
        <>
            <h1>Component B is {user}</h1>
            <ChildC />
        </>
    );
}