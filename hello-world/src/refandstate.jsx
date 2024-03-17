import React,{useState,useRef}from 'react'

export default function NewState(){
    const[count,setCount]=useState(0);
    function handleClick(){
        setCount(count+1);
    }
    return(
        <button onClick={handleClick}>Clicked {count} times</button>

    )
}

export function FirstRef(){
    const newRef=useRef(0);
    function clickHandle(){
        newRef.current=newRef.current+1
    }
    return(
        <button onClick={clickHandle}>You clicked {newRef.current} times</button>
    )
}