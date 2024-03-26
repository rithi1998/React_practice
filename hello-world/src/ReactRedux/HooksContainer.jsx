import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { buySaree } from './SareeAction';
export default function HooksContainer(){
    const numOfSarees=useSelector(state => state.saree.numOfSarees);
    const dispatch=useDispatch();
    return(
        <div>
            <h2>Number of Sarees - {numOfSarees}</h2>
            <button onClick={()=> dispatch(buySaree())}>Buy Saree</button>
        </div>
    );
}