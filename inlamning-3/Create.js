import React, { Component } from 'react';


class Create extends Component {
    constructor(props){
        this.state = {value: ''}

        this.handleChange = this.setData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        this.setState({value:event.target.value});
    }
    
    handleSubmit(event){
        localStorage.setItem('myData', JSON.stringify(this.state.value))
    }

    render(){
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label>
                    <input value={this.state.value} type="text" ></input><br/>
                    <label>Nick: </label>
                    <input value={this.state.value} type="text" ></input><br/>
                    <label>Age: </label>
                    <select value={this.state.value} defaultValue="Select Age">
                        <option defaultValue>Select Age</option>
                        <option value="<1">{"<"}1</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">10{">"}</option>
                    </select><br />
                    <label>Bio: </label>
                    <input value={this.state.value} type="text" ></input><br/>
        
                    <label>Friends: </label><input value={this.state.value} type="text" ></input><br/>
                </form>
                <button onClick={this.handleSubmit}>Save dog</button>
            </>
        )
    }
}
export default Create;