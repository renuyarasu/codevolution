import React, { Component } from 'react'
import './App.css';
import PostList from './components/PostList';

export class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>HTTP and React</h1>
                <PostList/>
            </div>
        )
    }
}
export default App;
