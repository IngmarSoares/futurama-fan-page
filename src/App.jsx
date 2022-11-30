import { useState } from 'react'
import './App.css'


fetch('/api')
  .then(resp => resp.json())
  .then(data => console.log(JSON.stringify(data, null, 2)));

  

function App() {


  
  return (
    <div className="App">
      <h1> </h1>
    </div>
  )
}

export default App
