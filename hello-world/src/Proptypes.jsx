import React,{Component} from 'react';
import PropTypes from 'prop-types';


export default class PropTypeOne extends Component {
    render() {

        return (
            <div>
                <h2>Hello, {this.props.name}</h2> 
            </div>
        );
    }
}

PropTypeOne.propTypes = {
    name: PropTypes.string  //if number is given in props it will show error in console but output will come
};

PropTypeOne.defaultProps={
    name:'Stranger'// if there is no prop value stranger will be displayed
};


