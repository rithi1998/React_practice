import React from 'react';
import PropTypes from 'prop-types';
const NewComponent={
    Date:function DotNotation(props){
        return <h1>{props.name} is the new candidate</h1>;
    }
};

export default function BluePicker(){
    return <NewComponent.Date name="Rithika">Click me</NewComponent.Date>;
}

NewComponent.Date.propTypes={
    name:PropTypes.string
};


