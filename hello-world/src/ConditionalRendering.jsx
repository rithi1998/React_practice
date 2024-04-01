import React,{useState} from 'react';

export default function Render(){
    const [name,setName]=useState(null);
    const[array,setArray]=useState([]);
    return(
        <div>
            {
                name && <h1> {`Hi ${name}`}</h1>
                
            }
            <button onClick={()=>setName('Rithika')}>Change</button>
            <ul>
                {array.map(item=>{
                    <li>{item %2==0}?{item}</li>;
                })}
            </ul>

        </div>
    );
}


