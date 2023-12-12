import { useState } from 'react'
import reactLogo from './assets/react.svg'


import Greeting from './Greeting'
import './APP.css'
function App() {

  return (
    <div className="App">
    <h1 className='opening'>Group members list: </h1>
      <Greeting/>
    </div>
  )
}

export default App
