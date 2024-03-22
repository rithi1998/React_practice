import React from 'react';
import PropTypes from 'prop-types';
// function Greet(){
//     return <h1> Hello Rithika</h1>
// }

const Greet = () => <h1>Hi Rithika</h1>;

export default Greet;


export function Welcome(props) {
    const name = 'Rajkumar';
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