import { useState,useLayoutEffect,useEffect } from "react";

export default function LayoutEffecthook(){
    const [data,setData]=useState(false);

    useEffect(()=>{
        console.log("UseEffect hook is rendered");
    },[data]);

    useLayoutEffect(()=>{
        console.log("UseLayoutEffect hook is rendered");
    },[data]);

    return(
        <div>
            <button onClick={()=>setData(!data)}>SetData</button>
            {data && <h3>Welcome Rithika</h3>}
        </div>
    )
}