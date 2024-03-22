import React,{Component} from 'react';
import PropTypes from 'prop-types';
export default class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state={
            isError:false,
           
        };
    }
    componentDidCatch(error,errorinfo){
        this.setState({
            isError:true,
            
        });
        console.log('Error caught:',error,errorinfo);
    }

    render(){
        if(this.state.isError){
            return(
                <h1>Kindly try again later</h1>

            );
        }
        if(this.props.children){
            return this.props.children;
        }
        
        return null;

    }
}

ErrorBoundary.propTypes={
    children:PropTypes.node
};
