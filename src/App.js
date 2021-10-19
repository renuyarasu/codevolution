import React, { Component } from 'react'
import './App.css';
import RenderPropsClickCounter from './components/RenderPropsClickCounter';
import RenderPropsHoverCounter from './components/RenderPropsHoverCounter';

export class App extends Component {
    render() {
        return (
            <div className="App">
                <RenderPropsClickCounter/>
                <RenderPropsHoverCounter/>
            </div>
        )
    }
}
export default App;
