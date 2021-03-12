import { Component } from "react";

export default class Profile extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h3>Profile:</h3>
                <p>
                    Name: {this.props.frågetecken}<br/>
                    Nick: {this.props.frågetecken}<br/>
                    Age: {this.props.frågetecken}<br/>
                    Bio: {this.props.frågetecken}<br/>
                    Friends: {this.props.frågetecken}<br/>
                </p>


            </div>
        )
    }
}