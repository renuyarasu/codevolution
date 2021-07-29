import React, { Component } from 'react'

export class Click extends Component {
    clicked(){
        alert('clicked')
    }
    render() {
        return (
            <div>
                 <button onClick={this.clicked}>Click</button>
            </div>
        )
    }
}

export default Click
