import React from 'react';


const NewInput=React.forwardRef((props,ref)=>{
    return(
        <div>
            <input type="text" ref={ref}></input>
        </div>
    );
});

NewInput.displayName='NewInput';

export default NewInput;