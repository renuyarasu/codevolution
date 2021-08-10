import React, { Component } from 'react'

class FragmentDemo extends Component {
    render() {
        return (
            <>
                <h1>Fragment Demo</h1>
                <p>A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.</p>
            </>
        )
    }
}

export default FragmentDemo
