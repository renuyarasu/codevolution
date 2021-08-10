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

    // shouldComponentUpdate
    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate');
        return true
    }

    // getSnapshotBeforeUpdate
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate');
        return null
    }

    // componentDidUpdate
    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate');
    }

    // changeState
    changeState = () => {
        this.setState({
            name: 'VedaGna'
        })
    }
    // render
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <h1>Lifecycle A</h1>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
