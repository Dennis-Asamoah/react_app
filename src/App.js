import logo from './logo.svg';
import './App.css';
import Component1 from './components/Component1';
import Component2 from "./components/Component2";
import {Link,Outlet} from "react-router-dom";
import {useEffect, useState,useCallback} from 'react';
import Button from  '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import IconButtons from './components/Stack'
import ActionAreaCard from './components/Cart';
import IconButtonColors from './components/Finger';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
import Album from './components/Price'
import Dashboard from './dashboard/Dashboard'





function Test()
{
  return <h1>React is bae</h1>
}
const k = [<ActionAreaCard />,<ActionAreaCard />]
const aaa = () => {
  for (let i=0;i<3;i++)
   k.add(<ActionAreaCard />)
}



function App() {
  const [count, setCount] = useState(0)
  var  [a ,setA] = useState(0)

//var a = 0
function calculate()
{ 
  for(let i = 0; i < 1000 ; i++ )
   { a += 1 }
   console.log(a)
   setA(a)
  
}

var b = 9
function koo()
{  return b+1 

}

useEffect(calculate,[count])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Test />
        <nav>
            <ul>
              <li><Link to='/'>home</Link></li>
              <li><Link to='component1'>component1</Link></li>
              <li><Link to='component2'>component2</Link></li>
            </ul>
        </nav>
        
         
      

         
         <Button style={{marginBottom:8}} variant='contained' size='small'> clickme </Button>
        
          <ul>
          {
          [1,2,3].map(
            (i) => (
              
             <ActionAreaCard />
            )
          )
            }
          </ul>
          
          <ButtonGroup variant='text'>
            <Button variant='contained' > clickme </Button>
            <Button  color='error'> clickme1 </Button>
            <Button > clickme2 </Button>

         </ButtonGroup>
      

         
         <IconButtons />
         <IconButtonColors />

        <Outlet/>
        <h1>{aaa}</h1>
        <button onClick={calculate}> click</button>
        <button onClick={()=>setCount(count+1)}> clicked</button>
        <h1>{a}</h1>
        <h1>{count}</h1>
        <h1>{b}</h1>
          <Dashboard /> 
          {/* <Component1 name='Dennis' /> */}
      </header>
    </div>
  );
}

export default App;








