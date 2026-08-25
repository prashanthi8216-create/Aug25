import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name ="Prashanthi";
  const sub = "FSWD section-1"

  return (
    <><div>
        <header><h1> jsx is HTML like syntax inside javascript</h1></header>
        </div>
        <div>
        <p> JSx is syntactic sugar </p>
        <div> <br />
        <h1> Hello</h1> <p>world</p>
        </div>
        <div className='hero'>HI</div>
      </div>
      <div>
        
        <h1> Heartly Welcome {name}</h1>
        
      </div>
    </>
  )
} export default App