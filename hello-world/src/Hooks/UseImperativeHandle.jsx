import React,{ useImperativeHandle,useRef,forwardRef } from 'react';

const MyInput=forwardRef(function MyInput(props,ref){
    const inputRef=useRef(null);

    useImperativeHandle(ref,()=>{
        return{
            focus(){
                inputRef.current.focus();
            },
            
            scrollIntoView(){
                inputRef.current.scrollIntoView();
            },
        };
    },[]);

    return <input {...props} ref={inputRef}></input>;
});

export {MyInput};


export default function ImperativehandleHook() {
    const ref = useRef(null);

    function handleClick() {
        ref.current.focus();
    // This won't work because the DOM node isn't exposed:
    // ref.current.style.opacity = 0.5;
    }

    return (
        <form>
            <MyInput placeholder="Enter your name" ref={ref} />
            <button type="button" onClick={handleClick}>
            Edit
            </button>
        </form>
    );
}
