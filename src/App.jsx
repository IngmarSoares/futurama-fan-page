import { useState, useEffect } from 'react'
import './App.css'


function App() {
  let [info,setInfo] = useState('')
  
  useEffect(() => {
    const fetchData = async (url) => {
      const response = await fetch(url);
      const json = await response.json();
      setInfo(JSON.stringify(json[0]['synopsis']));
    }
  
    fetchData('/futurama/info')
      .catch(console.error);;
  }, [])

  return (
    <div className="App">
      <h1> {info} </h1>
    </div>
  )
}

export default App
