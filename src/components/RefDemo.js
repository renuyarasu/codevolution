import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
        super(props)
        this.cbRef = null
        this.setCbRef = (element) => {
            this.cbRef = element
        }

    }
    componentDidMount() {
        if (this.cbRef) {
            this.cbRef.focus()
        }
    }
    clickHandler = () => {
        alert(this.cbRef.value)
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.setCbRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefDemo
