import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()        
    }
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef);
    }
    render() {
        return (
            <div>
                <h1>Ref Demo</h1>
                <input type="text" ref={this.inputRef} />
            </div>
        )
    }
}

export default RefDemo
