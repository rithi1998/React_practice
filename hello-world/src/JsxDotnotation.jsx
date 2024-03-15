import React from 'react'

const NewComponent={
    Date:function DotNotation(props){
        return <h1>{props.name} is the new candidate</h1>
    }
}

export default function BluePicker(){
    return <NewComponent.Date name="Rithika">Click me</NewComponent.Date>
}
