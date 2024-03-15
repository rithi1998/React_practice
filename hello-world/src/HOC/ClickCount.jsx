import React,{Component} from 'react'
import UpdatedComponent from './NewCountHoc';

class ClickCount extends Component{
   

    render(){
        const {count,HandleClick}=this.props
        return(
            <button onClick={HandleClick}>{this.props.name} Clicked {count} times</button>
        )

    }
}

export default UpdatedComponent(ClickCount)