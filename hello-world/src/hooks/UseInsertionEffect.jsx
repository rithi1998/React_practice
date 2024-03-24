import React,{useEffect,useInsertionEffect,useLayoutEffect} from 'react';

export default function InsertionEffectHook(){
    useInsertionEffect(()=>{
        console.log('Insertion hook');
    },[]);

    useEffect(()=>{
        console.log('Effect Hook');
    },[]);

    useLayoutEffect(()=>{
        console.log('Layout Hook');
    },[]);

    console.log('Rendering');

    return <div>Test</div>;
}