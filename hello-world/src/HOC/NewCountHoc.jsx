import React,{Component}from 'react'

const UpdatedComponent= (OriginalComponent)=>{
    class NewComponent extends Component{
        constructor(props){
            super(props);
            this.state={
                count:0
            }
        }
    
        HandleClick=()=>{
            this.setState(prevState =>{
                return{
                    count:prevState.count+1
                }
            }) 
        }
        render(){
            return <OriginalComponent 
            count={this.state.count}
            HandleClick={this.HandleClick}
            {...this.props}
            />

        }
    }
    return NewComponent
    

}
export default UpdatedComponent