import React, { Component } from 'react'
export class RenderPropsHoverCounter extends Component {
    render() {
        const { count, increaseCount } = this.props
        return (
            <div>
                <h1 onMouseOver={increaseCount}>Hovered {count} Times</h1>
            </div>
        )
    }
}

export default RenderPropsHoverCounter
