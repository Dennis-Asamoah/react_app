import React,{useEffect, useState} from 'react';
import {Link, Outlet} from "react-router-dom";


function koo()
{
    console.log('koo');
}

function Component1(props)
{
    // function koo()
    // {
    //     setCount(count + 1)
    //     setCount1(count + 12)
    // }
     

    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    //const [count2, setCount2] = useState(0)

    
    

    return <><h1>
        Component1 </h1>
        <ul>
            <li><Link to='component3'>component3</Link></li>
            <li><a href='/component1'>hrefr</a></li>
        </ul>
        <Outlet/>
    </>
    
    
}

export default Component1