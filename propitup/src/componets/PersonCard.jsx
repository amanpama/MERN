import { render } from "@testing-library/react";
import React, { Component } from "react";

class PersonCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            age:this.props.age
        };
    }

    countHandler = () => {
        this.setState({
            age: this.state.age+1 
        })
    }

    

    render() {
        return (
            <>
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.state.age} </p>
                <p> Hair Color: Black </p>
                <button onClick={this.countHandler} >Birthday Button for {this.props.name}</button>

            </div>
            </>
            )
    }
}

export default PersonCard;