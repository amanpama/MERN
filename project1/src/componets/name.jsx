import React, { Component } from "react";

class Name extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
            <h1>Hello Dojo!</h1>
                <h2>Things I need to do:</h2>
                <li>Learn React</li>
                <li>Climb Mt everest</li>
                <li>Run a marathon</li>
                <li>Feed the dogs</li>
            </div>
            
        )
    }
}

export default Name;