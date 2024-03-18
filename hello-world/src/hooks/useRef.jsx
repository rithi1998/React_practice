import React,{useRef} from 'react'

export default function RefHook(){
    let firstRef=useRef(0);
    function handleClick(){
        firstRef.current=firstRef.current+1
    }
    return(
        <>
        <button onClick={handleClick}>You have clicked {firstRef.current} times</button>
        {/* <h1>You have clicked {ref.current} times</h1> */}
        </>
        
        
    )
}