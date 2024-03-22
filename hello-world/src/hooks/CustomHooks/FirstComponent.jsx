import useCustomHook from "./CustomHooks";

export default function FirstComponent(props){
    const clickedButton=useCustomHook(0,"FirstComponent");
    return(
        <div>
            <h1>
                First Component
            </h1>
            <button onClick={clickedButton}>Click here</button>
        </div>
    );
}
