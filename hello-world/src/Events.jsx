import React,{Component} from 'react'
import useRef from 'react'

// export default function Hello(){
//     function greet(){
//         console.log("How are you");
//     }

//     let myFunction=()=>{
//         console.log("Welcome to the world");
//     }

//     return(
//         <div>
//     <button onClick={greet}> Click here</button>
//     <button onClick={myFunction}>Save here </button>
//     </div>
    
//     )
// }

// export default function NewEvent(customer){
//     return(
//         <img
//           src= {customer.url}
//           alt={'Photo of '+customer.name}
//           className="pogo"
//           style={{
//             width: customer.imageSize,
//             height: customer.imagesize
//           }}

//         />
//     )

// }

// export default class FirstEvent extends Component{
//     constructor(props){
//         super(props);
//         this.state={count:0};
//     }

//     firstClick= () => {
//         this.setState({
//             count:this.state.count + 1
//         },function(){
//             console.log("Event finished")
//         });
        
//     }

//     render(){
//         return(
//             <>
//             <div>
//             Button presses:{this.state.count}</div>
//             <button onClick={this.firstClick}> Click me</button>          
//             </>
//         )
//     }
// }



// export default function NewClick(){

//     const inputRef=useRef(null);
//     function handleClick(){
//         inputRef.current.focus();
//     }

//     return(
//         <>
//         <input ref={inputRef}/>
//         <button onClick={handleClick}>Click here</button>
//         </>
//     );
// }


export default function MouseEvents(){
    // function ClickEvent(){
    //     console.log("Mouse clicked")
    // }
    function EnterEvent(){
        console.log("Mouse entered")
    }
    return(
        <div>
            <h1>Events</h1>

        <button 
        onClick={()=>console.log("Mouse Clicked")}
        onMouseEnter={EnterEvent}
        onMouseLeave={e=>console.log("Mouse Leave")}
        >
        
        Click me
        </button>
            
        </div>
    )
}
