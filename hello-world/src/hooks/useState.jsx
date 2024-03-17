import React,{useState} from 'react'

export default function StateHook(){
    const [count,setCount]=useState(0)
    return(
        <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
    )
}


export function PreviousState(){
    const[age,setAge]=useState(40)
    const increment=()=>{
        setAge(age=>age+1)
    }
    return(
        <>
        <h1>
            Your age={age}

        </h1>
        <button onClick={()=>{
            increment();
            increment();
            increment();}}>3 age higher</button>
            <button onClick={()=>{increment()}}>1 age higher</button>
            </>
    )
}

export function ObjectState(){
    const [name,setName]=useState({firstName:"",lastName:""})
    return(
        <form>
            <input type='text' value={name.firstName} 
            onChange={e => setName({...name,firstName:e.target.value})}></input>
            <input type='text' value={name.lastName} 
            onChange={e => setName({...name,lastName:e.target.value})}></input>
            <h2>
                Firstname: {name.firstName}

            </h2>
            <h2>Lastname: {name.lastName}</h2>
        </form>

    )
}

export function ArrayState(){
    const[items,setItem]=useState([])
    const addItem=()=>{
        setItem([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }])
       
    }
    return(
        <div>
            <button onClick={addItem}>Click here</button>
            <ul>
                {items.map(item=>{
                   return <li key={item.id}>{item.value}</li>
                })}
            </ul>
        </div>
    )
}