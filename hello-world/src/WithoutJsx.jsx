import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class CreateElement extends Component{
    render(){
        return(
            React.createElement('div',null,`Hello ${this.props.input}`)

        );
    }
}

CreateElement.propTypes={
    input:PropTypes.string.isRequired
};


document.addEventListener('DOMContentLoaded',function(){
    const root=document.getElementById('root');
    ReactDOM.render(<CreateElement input="Rithika"/>, root);
});
//ReactDOM.render(<CreateElement input="Rithika"/>, document.getElementById('root'));
// const root=ReactDOM.createRoot(document.getElementById('root'))
// root.render(React.createElement('Hello',{input:'Rithika'},null))