import React,{forwardRef} from 'react';


const NewInput=forwardRef((props,ref)=>{
    return(
        <div>
            <input type="text" ref={ref}></input>
        </div>
    );
});

NewInput.displayName='NewInput';

export default NewInput;