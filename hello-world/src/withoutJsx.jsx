import React,{Component} from 'react'
import ReactDOM from 'react-dom'

export default class CreateElement extends Component{
    render(){
        return(
            React.createElement('div',null,`Hello ${this.props.input}`)

        )
    }
}

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(React.createElement('Hello',{input:'Rithika'},null))