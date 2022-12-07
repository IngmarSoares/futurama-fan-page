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
  let [characters,setCharacters] = useState(null)
  let [loading,setLoading] = useState(true)


  
  useEffect(() => {

    Promise.all([
      fetch('/futurama/info'),
      fetch('/futurama/episodes'),
      fetch('/futurama/characters'),
    ])
    .then(([resInfo, resEpisodes, resCharacters]) => 
      Promise.all([resInfo.json(), resEpisodes.json(), resCharacters.json()])
    )
    .then(([dataInfo,dataEpisodes,dataCharacters]) => {
      setInfo(dataInfo);
      setEpisodes(dataEpisodes);
      setCharacters(dataCharacters);
      setLoading(false)
    })

  }, [])


  if (loading) { 
    return <img className='loading-img' src='/bender-loading.gif '/>}
  else return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route index element={ <Home /> } />
          <Route path='/home' element={ <Home /> } />
          <Route path='/info' element={ <Info json={info} />} />
          <Route path='/characters' element={ <Characters json={characters} /> } />
          <Route path='/cast' element={ <Cast />}  />
          <Route path='/episodes' element={ <Episodes json={episodes} /> } />
          <Route path='/*' element={ <Error /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
