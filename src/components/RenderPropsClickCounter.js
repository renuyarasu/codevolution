import React, { Component } from 'react'

export class RenderPropsClickCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increaseCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }
    render() {
        const { count } = this.state
        return (
            <div>
                <button onClick={this.increaseCount}>Clicked {count} Times</button>
            </div>
        )
    }
}

export default RenderPropsClickCounter
