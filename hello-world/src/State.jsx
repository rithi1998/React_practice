import React from 'react';
import {useState} from 'react';
import { Component } from 'react';

export default function NewClass(){
    let [name,setName]=useState('Rithika');
    function UpdateData(){
        setName(name='Raj');
    }
    console.warn('Clicked');
    return(
        <div>
            <h1> {name}</h1>
            <button onClick={UpdateData}>Update name</button>
        </div>
    );
}



export class NewFunction extends Component{
    constructor(){
        super();
        this.state={
            name:0
        };
    }

    UpdateName(){
        this.setState({name:this.state.name+1});
        console.warn('clicked');
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={()=>this.UpdateName()}>Update name</button>
            </div>

        );
    }

}

