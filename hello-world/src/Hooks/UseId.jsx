import React,{ useId,useState } from 'react';

export function IdHook(){
    return(
        <>
            <h2>Choose password</h2>
            <PasswordField/>
            <h2>Confirm password</h2>
            <PasswordField/>
        </>
    );

}


function PasswordField(){
    const passwordId=useId();
    return(
        <>
            <label>
                Password:
                <input type="password"
                    aria-describedby={passwordId}></input>
            </label>
            <p id={passwordId}>
                The password should contain atleast 15 characters
            </p>
        </>
    );
}

export default function UseId(){
    const id=useId();
    const[name,setName]=useState();
    const handleSubmit=()=>{
        alert('id'+ id +'- name: '+name);
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                    Enter name:{' '}
                    <input 
                        id={id+'-name'}
                        onChange={(e)=>setName(e.target.value)}
                        type="text"
                    />
                </p>
                <button type="submit">Submit</button>

            </form>
        </div>
    );
}


