import { Component } from "react";
export default class DidUpdate extends Component{
    constructor(){
        super();
        console.warn("Constructor called");
        this.state={
            name:"Rithika",
            count:0
        }
    }
    componentDidUpdate(prevProp,preState,snapshot){
        console.warn("componentDidUpdate called",preState);
    }
    shouldComponentUpdate(){
        console.warn("shouldComponentUpdate called",this.state.count);
        {if(this.state.count<5){
            return true;
        }
        }
    }
    // componentWillUnmount(){
    //     alert("Component unmounted");
    //     console.warn("unmount called...")
    // }
    ClickEvent(){
        this.setState({count:this.state.count+1});
    }
    render(){
        console.warn("render called");
        return(
            <>
            <h1>Component Did Update{this.state.count}</h1>
            <button onClick={()=>this.ClickEvent()}>Update</button>
            </>
        );
    }
}