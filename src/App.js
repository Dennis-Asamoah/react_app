import logo from './logo.svg';
import './App.css';


function Test()
{
  return <h1>React is bae</h1>
}  

function Appo(props)
{
  return <p>iT IS WELL of course </p>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Test />
        <p>
          Edit <code>src/App.js</code> and save to reload
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <Appo />
        </a>
        <Test />
      </header>
    </div>
  );
}

export default App;
