import React,{useMemo,useState} from 'react';

function squareNum(number){
    console.log('Squaring will be done');
    return Math.pow(number,2);
}

export default function MemoHook(){
    const[number,setNumber]=useState(0);
    const[count,setCount]=useState(0);

    const squaredNum=useMemo(()=>{
        return squareNum(number);
    },[number]);
        
    
    //change the state
    const changeHandle=(e)=>{
        setNumber(e.target.value);
    };
    
    //increase the count value
    const handleClick=()=>{
        setCount(count+1);
    };

    return(
        <div>
            <input type="number" value={number} onChange={changeHandle} />
            <h2>Output:{squaredNum}</h2>
            <button onClick={handleClick}>Click here</button>
            <h2>Count:{count}</h2>
        </div>
    );
}

