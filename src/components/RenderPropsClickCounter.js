import React, { Component } from 'react'

export class RenderPropsClickCounter extends Component {
    render() {
        const { count, increaseCount } = this.props
        return (
            <div>
                <button onClick={increaseCount}>Clicked {count} Times</button>
            </div>
        )
    }
}

export default RenderPropsClickCounter
