import React,{Component} from 'react';
import NewInput from './ChildInput';

export default class UserInput extends Component{
    constructor(props){
        super(props);
        this.inputRef=React.createRef();
    }

    ClickHandle=()=>{
        console.log('Button clicked');
        this.inputRef.current.focus();
    };

    render(){
        return(
            <div>
                <NewInput ref={this.inputRef}/>
                <button onClick={this.ClickHandle()}>Click here</button>
            </div>
        );
    }

}