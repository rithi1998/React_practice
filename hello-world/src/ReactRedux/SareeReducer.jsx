import { Buy_Saree } from './SareeType';

const initialState={
    numOfSarees:20
};

const sareeReducer= (state=initialState,action)=>{
    switch(action.type){
    case Buy_Saree:return{
        ...state,
        numOfSarees:state.numOfSarees-1
    };
    default: return state;
    }
    

};

export default sareeReducer;