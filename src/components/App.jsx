import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Characters from './Characters'
import Episodes from './Episodes'
import Info from './Info'
import Cast from './Cast'
import Error from './Error'
import Home from './Home'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/info' element={ <Info/>} />
          <Route path='/characters' element={ <Characters /> } />
          <Route path='/cast' element={ <Cast />}  />
          <Route path='/episodes' element={ <Episodes /> } />
          <Route path='/*' element={ <Error /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
