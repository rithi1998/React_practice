import React,{useReducer} from 'react'



function reducer(state,action){
    switch(action.type){
        case 'increment_age':{
            return{
                name:state.name,
                age:state.age+1
            }
        }

        case 'change_name':{
            return{
                name:action.nextName,
                age:state.age
            };
        }
    }
}

export default function IncrementAge(){
    const[state,dispatch]=useReducer(reducer,{name:'Rithika',age:22});
    function handleClick(){
        dispatch({type:'increment_age'});
    }
    function handleChange(e){
        dispatch({
            type:'change_name',
        nextName:e.target.value
        });
        
    }

    return(
        <>
        <input type="text" value={state.name}
        onChange={handleChange} />
        <button onClick={handleClick}>Increment age</button>
        <p>
            Hi {state.name}. You are {state.age} years old
        </p>
        </>
    )
}