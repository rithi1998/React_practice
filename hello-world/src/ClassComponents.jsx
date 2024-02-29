import React, {Component} from 'react'
class Define extends Component{
    render(){
        return(
            <h1> Welcome to the new world</h1>

        )
            
        
    }
}

export default Define;

export class NewComponent extends Component{
    constructor(props){
        super(props);
        this.state={color:"lavendar"};
    }

    newfunction = ()=>{
        this.setState=({color:"yellow"});

    }
    render(){
        
        return(
            
                <button onclick={this.newfunction}>
                    Click here
                </button>
            
        )

    }
}

export class LifeMethod extends Component{
    constructor(props){
        super(props);
        this.state={favoritecolor:'blue'}
    }
    // static getDerivedStateFromProps(props,state){
    //     return {favoritecolor:props.favcol }
    // }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({favoritecolor:"Yellow"})
        },2000);

        
    }
    render(){
        return(
            <h3>Favorite color is {this.state.favoritecolor}</h3>

        )
    }
}

