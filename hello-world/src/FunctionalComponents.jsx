import React,{useEffect, useState} from 'react';
import PropTypes from 'prop-types';
// function Greet(){
//     return <h1> Hello Rithika</h1>
// }

const Greet = () => <h1>Hi Rithika</h1>;

export default Greet;


export function Welcome(props) {
    //const name = 'Rajkumar';
    const [name,setName]=useState(initial);
    const handleName=()=>{
        setName({name:'Raj'});
    };

    
    
    return (
        <>
            <h1> Hello Raj</h1>

            <h2>
                Hello {name} {props.greet}
            </h2>
        </>
    );
}

Welcome.propTypes={
    greet:PropTypes.string
};