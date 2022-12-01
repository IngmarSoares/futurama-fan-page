import { NavLink } from "react-router-dom";
import './css/NavBar.css'


function NavBar () {
  
  return(
    <nav className="navbar">
    <NavLink className='nav-bar-link' to='/home'>Home</NavLink>
    <NavLink className='nav-bar-link' to='/info'>Info</NavLink>
    <NavLink className='nav-bar-link' to='/episodes'>Episodes</NavLink>
    <NavLink className='nav-bar-link' to='/characters'>Characters</NavLink>
    <NavLink className='nav-bar-link' to='/cast'>Cast</NavLink>
    </nav>
  )
  }

  export default NavBar

