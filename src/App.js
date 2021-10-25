import React from 'react'
import './App.css';
import ComponentC from './components/ComponentC';

export const UserContext = React.createContext()
export const NameContext = React.createContext()

function App() {
  return (
    <div className='App'>
      <UserContext.Provider value={'Vedana'}>
        <NameContext.Provider  value={'Yarasu'}>
          <ComponentC />
        </NameContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
