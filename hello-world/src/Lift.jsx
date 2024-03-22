import React,{Component}from 'react';
import PropTypes from 'prop-types';
export default class NewLift extends Component{
    constructor(){
        super();
        this.state={
            name:'Rithika'
        };
    }
    
    HandleClick(){
        this.setState({name:'Raj'});
    
    }
    render(){
        return(
            <>
                <Define value={this.setState.name} HandleClick={this.HandleClick}></Define><br/><br/>
                <Define value={this.setState.name} HandleClick={this.HandleClick}></Define>
            </>
        );
    }
}

class Define extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <>
                <input value={this.props.value} onChange={this.props.HandleClick}/>
            </>
        );
    }
}

Define.propTypes={
    HandleClick:PropTypes.func,
    value:PropTypes.string
};