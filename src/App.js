import React, { Component } from 'react'
import './App.css';
import RenderPropsClickCounter from './components/RenderPropsClickCounter';
import RenderPropsHoverCounter from './components/RenderPropsHoverCounter';
import User from './components/User';

export class App extends Component {
    render() {
        return (
            <div className="App">
                <RenderPropsClickCounter/>
                <RenderPropsHoverCounter/>
                <User name={(isLoggedIn) => isLoggedIn ? 'VedaGna' : 'Guest'}/>
            </div>
        )
    }
}
export default App;
