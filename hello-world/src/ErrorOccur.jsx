const ErrorOccur=()=>{
    const NewError=()=>{
        throw new Error("There are errors in this component")
    };
    return(
        <div>
            <h2>
                Error Boundary
            </h2>
            <button onClick={NewError}>Click here</button>
            <p>Clicking the above button will throw an error</p>
        </div>
    );
};

export default ErrorOccur;