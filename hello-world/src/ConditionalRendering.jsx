import React,{useState} from 'react';

export default function Render(){
    const [name,setName]=useState(null);
    return(
        <div>
            {
                name && <h1> {`Hi ${name}`}</h1>
            }
            <button onClick={()=>setName('Rithika')}>Change</button>

        </div>
    );
}