import React from 'react'
import './App.css';
import ClassMouseMove from './components/ClassMouseMove';
import HookMouseMove from './components/HookMouseMove';
function App() {
  return (
    <div className='App'>
      {/* <ClassMouseMove /> */}
      <HookMouseMove/>
    </div>
  )
}

export default App
