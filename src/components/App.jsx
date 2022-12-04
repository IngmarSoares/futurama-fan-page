import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'
import './styles/App.css'
import Characters from './Characters'
import Episodes from './Episodes'
import Info from './Info'
import Cast from './Cast'
import Error from './Error'
import Home from './Home'
import NavBar from './NavBar'


function App() {
  console.log('App rendered')
  let [episodes,setEpisodes] = useState(null)
  let [info,setInfo] = useState(null)
  let [loading,setLoading] = useState(true)


  
  useEffect(() => {

    Promise.all([
      fetch('/futurama/info'),
      fetch('/futurama/episodes'),
    ])
    .then(([resInfo, resEpisodes]) => 
      Promise.all([resInfo.json(), resEpisodes.json()])
    )
    .then(([dataInfo,dataEpisodes]) => {
      setInfo(dataInfo);
      setEpisodes(dataEpisodes);
      setLoading(false)
    })

  }, [])


  if (loading) { 
    return <img src='/bender-loading.gif '/>}
  else return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/info' element={ <Info json={info} />} />
          <Route path='/characters' element={ <Characters /> } />
          <Route path='/cast' element={ <Cast />}  />
          <Route path='/episodes' element={ <Episodes json={episodes} /> } />
          <Route path='/*' element={ <Error /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
