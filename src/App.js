import React from 'react'
import './App.css';
import ClassMouseMove from './components/ClassMouseMove';
import HookMouseMove from './components/HookMouseMove';
import MouseContainer from './components/MouseContainer';
function App() {
  return (
    <div className='App'>
      {/* <ClassMouseMove /> */}
      {/* <HookMouseMove/> */}
      <MouseContainer/>
    </div>
  )
}

export default App
