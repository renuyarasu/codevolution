import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef);
    }
    clickHandler =() => {
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <h1>Ref Demo</h1>
                <input type="text" ref={this.inputRef} /><br /><br />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefDemo
