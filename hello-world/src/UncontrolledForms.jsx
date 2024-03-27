import React,{Component} from 'react';

export default class UncontrolForm extends Component{
    constructor(props){
        super(props);
        this.input=React.createRef();
        this.SubmitEvent=this.SubmitEvent.bind(this);
    }

    SubmitEvent(event){
        alert(this.input.current.value);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.SubmitEvent}>
                <label>
                    Name:
                    <input defaultValue="Ram" type="text" ref={this.input}/>
                </label>
                <br/><br/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}