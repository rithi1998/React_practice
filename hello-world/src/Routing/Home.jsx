import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function HomePage(){
    const navigate=useNavigate();
    return(
        <div>
            <h1>Home Page</h1>
            <button onClick={()=> navigate('order-summary',{replace:true})}> 
                Place order</button>
        </div>

    //replace:true => goes back to the google page completely
    );
}