import { useDebugValue,useState } from 'react';

export default function UseUser(){
    const [user,setUser]= useState('Rithi');
    useDebugValue(user== null ?'No user': user.name);
    return [user,setUser];

}