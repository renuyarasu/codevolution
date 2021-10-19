import React, { Component } from 'react'
import './App.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

export class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>HTTP and React</h1>
                <PostForm/>
                {/* <PostList/> */}
            </div>
        )
    }
}
export default App;
