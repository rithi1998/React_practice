const initialState={
    fromDate:'',
    toDate:'',
    leaveType:'',
    numberOfDays:'',
    description:''
};

const leaveDetailsReducer=(state=initialState,action)=>{
    switch(action.type){
    case 'SET_LEAVE_DETAILS':
        return{
            ...state,
            ...action.payload
        };
    case 'CLEAR_LEAVE_DETAILS':
        return initialState;
    default:
        return state;
    }
    
};

export default leaveDetailsReducer;