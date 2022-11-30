import { useState } from 'react'
import './App.css'


fetch('/api')
  .then(resp => resp.json())
  .then(data => console.log(JSON.stringify(data)));

  console.log('hello')

function App() {


  
  return (
    <div className="App">
      <h1> hello </h1>
    </div>
  )
}

export default App
