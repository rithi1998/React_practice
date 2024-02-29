import React,{useState} from 'react'
import { Component } from 'react'


export default function NewProp(props){
    console.log(props)
    let [name,setName]=useState("Raj")
    return(
        <>
        <div>
            <h1>Hello {name}</h1>
            <h2>Email: {props.email}</h2>
            <h3>Address:{props.details.address}</h3>
            <h3>Mobile:{props.details.mobile}</h3>
        </div>
    <button onClick={()=>{setName("Sidhu")}}>Update details</button>
        </>
    )
}

export class Detail extends Component{
    render(){
        return(
            <div>
                <h1>Hi {this.props.name}</h1>
            </div>
        )
    }
}