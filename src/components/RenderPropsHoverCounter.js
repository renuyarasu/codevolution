import React, { Component } from 'react'
export class RenderPropsHoverCounter extends Component {
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
                <h1 onMouseOver={this.increaseCount}>Hovered {count}     Times</h1>
            </div>
        )
    }
}

export default RenderPropsHoverCounter
