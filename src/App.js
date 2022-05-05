import logo from './logo.svg';
import './App.css';
import Component1 from './components/Component1';
import Component2 from "./components/Component2";
import {Link,Outlet} from "react-router-dom";


function Test()
{
  return <h1>React is bae</h1>
}  


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Test />
        <nav>
            <ul>
              <li><Link to='component1'>component1</Link></li>
              <li><Link to='component2'>component2</Link></li>
            </ul>
        </nav>
        
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
          
        </a>
        <Outlet/>
        <Test />
          {/* <Component1 name='Dennis' /> */}
      </header>
    </div>
  );
}

export default App;
