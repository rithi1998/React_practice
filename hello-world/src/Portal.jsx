import React,{Component} from 'react'
import ReactDOM from 'react-dom'

export default class CreatePortal extends Component{
    render(){
        return ReactDOM.createPortal(
            <button onClick={this.HandleClick}>Click me</button>,
            document.getElementById('root-portal')
        )

    }
    
}

export class NewPortal extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
        this.HandleClick=this.HandleClick.bind(this)
    }
    HandleClick(){
        this.setState(prevState =>(
            {count:prevState.count+1}
        ));
    }
    render(){
        return(
            <div onClick={this.HandleClick}
            style={{marginLeft:'10px'}}>
                <p>
                    Clicked {this.state.count}times
                </p>
                <CreatePortal/>
            </div>
        )
    }

}