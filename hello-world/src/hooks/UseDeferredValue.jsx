import React,{useState,useDeferredValue,useEffect} from 'react';

export default function DeferredValuehook(){
    const [count,setCount]=useState(0);
    const deferredCounter=useDeferredValue(count);

    useEffect(()=>{
        console.log(`Counter value:${count}`);
        console.log(`Deferredcounter value:${deferredCounter}`);
    });
    
    return(
        <div>
            <h2>Advanced Component Counter:{deferredCounter}</h2>
            <h2>Basic Component counter:{count}</h2>
            <button onClick={()=>setCount(count+1)}>Click here</button>
        </div>
    );
}