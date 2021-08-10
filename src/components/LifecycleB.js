import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)

        // constructor
        this.state = {
            name: 'VedaGna'
        }
        console.log('LifecycleB constructor');
    }

    // getDerivedStateFromProps
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    // componentDidMount
    componentDidMount() {
        console.log('LifecycleB componentDidMount');
    }

    // render
    render() {
        console.log('LifecycleB render')
        return (
            <div>
                <h1>Lifecycle B</h1>
            </div>
        )
    }
}

export default LifecycleB
