import React from 'react'


const NewInput=React.forwardRef((props,ref)=>{
    return(
        <div>
            <input type="text" ref={ref}></input>
        </div>
    )
})

export default NewInput