import React, { Component } from 'react'

export default class Greet extends Component {
    render() {
        const {name,lName } = this.props
        return (
            <div>
                <h1>Hello {name} {lName} </h1>
            </div>
        )
    }
}
