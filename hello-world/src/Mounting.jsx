import { Component } from "react";
export default class Example extends Component{
    constructor(){
        super();
        console.warn("Constructor called");
        this.state={
            name:"Rithika"
        }
    }
    componentDidMount(){
        console.warn("componentDidMount called");
    }
    render(){
        console.warn("render called");
        return(
            <>
            <h1>Component Did Mount{this.state.name}</h1>
            <button onClick={()=>{this.setState({name:"Nila"})}}>Update</button>
            </>
        );
    }
}