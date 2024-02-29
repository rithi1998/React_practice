import React,{Component} from 'react'

export default class NewForm extends Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
            data:"Kindly type an Essay",
            initial:"Blue"
        };
        
        this.HandleClick=this.HandleClick.bind(this);
        this.HandleSubmit=this.HandleSubmit.bind(this);
        this.HandleEvent=this.HandleEvent.bind(this);
        this.NewEvent=this.NewEvent.bind(this);
    }

    HandleClick(event){
        this.setState({value:event.target.value})

    }

    HandleEvent(event){
        this.setState({data:event.target.value})
    }
    NewEvent(event){
        this.setState({initial:event.target.value})
    }

    HandleSubmit(event){
        alert(this.state.value);
        alert(this.state.data);
        alert(this.state.initial);
        event.preventDefault();
    }

    render(){
        return(
            <>
            <form onSubmit={this.HandleSubmit}>
                <label>
                    Name:
                    <input type="text"  value={this.state.value} onChange={this.HandleClick}></input>
                </label>
                <br/><br/>
                <label>
                    Essay:
                    <textarea value={this.state.data} onChange={this.HandleEvent}></textarea>
                </label>
                <br/><br/>

                <label>
                    Select your favourite color:
                    <select value={this.state.initial} onChange={this.NewEvent}>
                        <option value="Red">Red</option>
                        <option value="Blue">Blue</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Purple">Purple</option>

                    </select>
                </label>
                <br/><br/>
                <input type="submit" value="Submit" />
            </form>
            </>
        )
    }
}



