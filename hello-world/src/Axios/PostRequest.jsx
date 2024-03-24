import React,{Component} from 'react';
import axios from 'axios';

export default class AddPerson extends Component{
    state={
        name:''
    };

    handleChange=event=>{
        this.setState({name:event.target.value});
    };

    handleSubmit=event=>{
        event.preventDefault();

        const user={
            name:this.state.name
        };

        axios.post('https://jsonplaceholder.typicode.com/users',{user})
            .then(res=>{
                console.log(res);
                console.log(res.data);
            });

    };

    render(){
        return(
            <div>
                <form>
                    <label>
                        Person Name:
                        <input type="text" name="name" onChange={this.handleChange}></input>
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}