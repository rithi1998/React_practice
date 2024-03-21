import React,{Component} from 'react'

export default class NewRef extends Component{
    constructor(props){
        super(props);
        this.myref=React.createRef();
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.myref.current.focus();
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.myref}/><br/><br/>
                <input type="button" value="Click me" onClick={this.handleClick} />
            </div>
        )
    }
}


