import React, { Component } from 'react'

export default class Parent extends Component{
    constructor(){
        super();
        this.state={
            data:0
        }
        
    }
    NewChange(item){
        this.setState({data:item})
    }
    render(){
        return(
            <>
             <h1>Lifting State up</h1>
             <Child val={this.state.data} NewChange={this.NewChange.bind(this)}/>
              <br/><br/>
             <Child val={this.state.data} NewChange={this.NewChange.bind(this)}/>
            </>
        )
    }
}




class Child extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <>
            <input value={this.props.val} 
            onChange={(e)=>{this.props.NewChange(e.target.value)}}/>
            </>
        )
    }
}
  