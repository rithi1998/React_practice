import React from 'react';
export default function TabButton({isActive,children,onClick}){
    if(isActive){
        return <b>{children}</b>;
    }

    return(
        <button onClick={()=>{
            onClick();
        }}>{children}</button>
        
    );
}