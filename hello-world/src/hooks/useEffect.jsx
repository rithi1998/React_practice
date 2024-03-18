import React,{useState,useEffect} from 'react'

export default function EffectHook(){
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log(`You have clicked ${count} times`)
    },[count])
    return(
        <button onClick={()=>setCount((prevCount)=>prevCount+1)}>
            Click here</button>
    )
}