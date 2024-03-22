import ChildA from './ChildA';
import React,{ createContext } from 'react';
 
export const UserContext=createContext();
export default function Context(){
    return(
        <>
            <UserContext.Provider value={'Rithika'}>
                <ChildA/>
            </UserContext.Provider>
        </>
    );
}