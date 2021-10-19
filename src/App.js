import React, { Component } from 'react'
import './App.css';
import Counter from './components/Counter';
import RenderPropsClickCounter from './components/RenderPropsClickCounter';
import RenderPropsHoverCounter from './components/RenderPropsHoverCounter';
import User from './components/User';

export class App extends Component {
    render() {
        return (
            <div className="App">

                <Counter>{(count, increaseCount) => <RenderPropsClickCounter count={count} increaseCount={increaseCount} />}</Counter>
                <Counter>{(count, increaseCount) => <RenderPropsHoverCounter count={count} increaseCount={increaseCount} />}</Counter>
                {/* <RenderPropsClickCounter/>
                <RenderPropsHoverCounter/>
                <User render={(isLoggedIn) => isLoggedIn ? 'VedaGna' : 'Guest'}/> */}
            </div>
        )
    }
}
export default App;
