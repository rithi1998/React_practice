import React from 'react';
import {connect} from 'react-redux';
import { buyKurti } from './KurtiAction';
import PropTypes from 'prop-types';

function KurtiShop(props){
    return(
        <div>
            <h2>Number of kurtis - {props.numOfKurtis}</h2>
            <button onClick={props.buyKurti}>Click here</button>
        </div>
    );
}

const mapStateToProps = state =>{
    return{
        numOfKurtis:state.kurti.numOfKurtis
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        buyKurti : ()=> dispatch(buyKurti())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(KurtiShop);

KurtiShop.propTypes={
    numOfKurtis:PropTypes.number,
    buyKurti:PropTypes.func
};
