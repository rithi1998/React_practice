import React,{Component} from 'react';
import UpdatedComponent from './NewCountHoc';
import PropTypes from 'prop-types';
class ClickCount extends Component{
   

    render(){
        const {count,HandleClick}=this.props;
        return(
            <button onClick={HandleClick}>{this.props.name} Clicked {count} times</button>
        );

    }
}

ClickCount.propTypes={
    count:PropTypes.number.isRequired,
    HandleClick:PropTypes.func.isRequired,
    name:PropTypes.string.isRequired
};

export default UpdatedComponent(ClickCount);