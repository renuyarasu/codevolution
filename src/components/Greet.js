import React, { Component } from 'react';

class Greet extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitors'
        }
    }
    changeMessage() {
        this.setState(
            {
                message: 'Thank You for Subscribing'
            }
        )
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button style={{ padding: '20px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }} onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        );
    }
}

export default Greet;