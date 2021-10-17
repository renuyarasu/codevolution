import React, { Component } from 'react'

export class ClickCounter extends Component {
    constructor(props) {
        super(props)    
        this.state = {
             count: 0
        }
    }
    increamentCounter = () => {
        this.setState(prevState => {
            return {count: prevState.count +1}
        })
    }
    render() {
        const {count} = this.state 
        return (
            <div>
                <button onClick={this.increamentCounter}>Clicked {count} Times</button>
            </div>
        )
    }
}

export default ClickCounter
