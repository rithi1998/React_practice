import React from 'react';
import { Component } from 'react';
export default class FirstBind extends Component{
    constructor(){
        super();
        this.HandleClick=this.HandleClick.bind(this);

    }
    HandleClick(){
        console.log(this);
    }

    render(){
        return(
            <>
                <button data-testid="Rithi" onClick={this.HandleClick}>Click here</button>
            </>
        );
    }
}