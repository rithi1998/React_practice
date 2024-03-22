import React,{useState} from 'react';

export default function TestCounter(){
    const [counter,setCounter]=useState(0);

    const incrementCounter = ()=>{
        setCounter((prevCounter)=>prevCounter+1);
    };

    const decrementCounter=()=>{
        setCounter((prevCounter)=>prevCounter-1);
    };

    return(
        <div>
            <button data-testid="increment" onClick={incrementCounter}>
                Increment
            </button>

            <button data-testid="decrement" onClick={decrementCounter}>
                Decrement
            </button>
            <p data-testid="counter">Count: {counter}</p>
        </div>
    );
}