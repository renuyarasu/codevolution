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

    // shouldComponentUpdate
    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate');
        return true
    }

    // getSnapshotBeforeUpdate
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleB getSnapshotBeforeUpdate');
        return null
    }

    // componentDidUpdate
    componentDidUpdate() {
        console.log('LifecycleB componentDidUpdate');
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
