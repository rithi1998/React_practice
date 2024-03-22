import React from 'react';
import { UserContext } from './Context';
export default function ChildC(){
    return(
        <>
            <h1>Component C</h1>
            <UserContext.Consumer>
                {
                    (user)=>{
                        return <h2>Username {user}</h2>;
                    }
                }
            </UserContext.Consumer>
        </>
    );
}