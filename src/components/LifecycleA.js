import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        // constructor
        this.state = {
            name: 'VedaGna'
        }
        console.log('LifecycleA constructor');
    }

    // getDerivedStateFromProps
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    // componentDidMount
    componentDidMount() {
        console.log('LifecycleA componentDidMount');
    }

    // render
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <h1>Lifecycle A</h1>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
