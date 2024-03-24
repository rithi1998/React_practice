import React from 'react';
import { useParams } from 'react-router-dom';

export const UserDetails=()=>{
    const {userId}=useParams();
    return(
        <h2>User Details {userId}</h2>
    );
};