import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Counter from './components/Navbar/counter/counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Counter/>
        <img src={logo} className="App-logo" alt="logo" />
        <p style = {{color: "blue"}}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
