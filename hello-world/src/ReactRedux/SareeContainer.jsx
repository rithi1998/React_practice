import React from 'react';
import {connect} from 'react-redux';
import { buySaree } from './SareeAction';
import PropTypes from 'prop-types';

function SareeShop(props){
    return(
        <div>
            <h2>Number of sarees - {props.numOfSarees}</h2>
            <button onClick={props.buySaree}>Click here</button>
        </div>
    );
}

const mapStateToProps = state =>{
    return{
        numOfSarees:state.saree.numOfSarees
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        buySaree : ()=> dispatch(buySaree())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(SareeShop);

SareeShop.propTypes={
    numOfSarees:PropTypes.number,
    buySaree:PropTypes.func
};
