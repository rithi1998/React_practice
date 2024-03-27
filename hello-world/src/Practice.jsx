import React,{Component, useState} from 'react';
// function Name(props){
//     const name='Rithi';
//     return(
//         <div>
//             <h2>Name:{props.name}</h2>
//             <button></button>
//         </div>
//     );
// }

// class NewName extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             name:'',
//             count:0
//         };
//     }

//     increment(){
//         this.setState({name:'Raj'});
//     }

//     incrementCount(){
//         this.setState((prevState)=>{count:prevState.count+1;});
//     }
//     render(){
//         return(
//             <div>
//                 <h2>Name:{this.state.name}</h2>
//                 <button onClick={this.increment}>Click</button>
//             </div>
            
//         );
//     }
// }

// function StateHooks(){
//     const [count,setCount]=useState(0);
//     return(
//         <div>
//             <button onClick={()=>setCount(count+1)} >Increment count</button>
//         </div>
//     );
// }


function EventHandler(){

    const handleClick=(event)=>{
        event.preventDefault();
        console.log('The button is clicked');

    };
    return(
        <div>
            {/* {count?():()} */}
            <h2></h2>
            <button onClick={handleClick}>Click here</button>
        </div>
    );
}

function Lists(){
    const items=[
        {id:1,name:'Rithi'},
        {id:2,name:'Raj'},
        {id:3,name:'Nila'},

    ];

    return(
        <ul>
            {items.map(item => {
                return <li key={item.id}>{item.name}</li>;
            })}
        </ul>
    );
}
