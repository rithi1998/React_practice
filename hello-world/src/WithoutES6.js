import React from 'react';
import PropTypes from 'prop-types';
var createReactClass=require('create-react-class');
var Greeting=createReactClass({
    //initail state definition
    getInitialState:function(){
        return {message:'Hello'};
    },

    //defining a method(automatic bind)
    handleClick:function(){
        alert(this.state.message);
    },

    //setting default prop value
    getDefaultProps:function(){
        return{
            name:'Rithi'
        };
    },


    render:function(){
        return (
            <div>
                <h1>Hello,{this.props.name}</h1>
                <button onClick={this.handleClick}>Click here</button>
            </div>
        );
    }

});

export default Greeting;

Greeting.propTypes={
    name:PropTypes.string.isRequired
};
