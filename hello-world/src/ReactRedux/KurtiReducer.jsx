import { Buy_Kurti } from './KurtiType';

const initialState={
    numOfKurtis:25
};

const kurtiReducer= (state=initialState,action)=>{
    switch(action.type){
    case Buy_Kurti:return{
        ...state,
        numOfKurtis:state.numOfKurtis-1
    };
    default: return state;
    }
    

};

export default kurtiReducer;