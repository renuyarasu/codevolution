import React, { Component } from 'react'

class Click extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'White'
        }
        // this.clickHandler = this.clickHandler.bind(this)
    }
    /*   clickHandler() {
          this.setState({
              message: 'Black'
          })
      } */
    clickHandler = () => {
        this.setState({
            message: 'Black'
        })
    }
        render() {
    return (
        <div>
            <h1>{this.state.message}</h1>
            {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
            {/* <button onClick={this.clickHandler}>Click</button> */}
            <button onClick={this.clickHandler}>Click</button>
        </div >
    )
}
}

export default Click
