import './App.css';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greet name='VedaGna' lname='Child'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, odit.</p>
        </Greet>
        <Greet name='Hindu' lname='Mother'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, odit.</p>
        </Greet>
        <Greet name='Renu' lname='Father'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, odit.</p>
        </Greet>
      </header>
    </div>
  );
}

export default App;
