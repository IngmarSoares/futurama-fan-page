import ('./styles/Characters.css')
import { useState, useEffect } from 'react'
import {characterList} from '../options/characters.js'


function Characters(props) {
  
  const [characters,setCharacters] = useState([])
  const [characterToShow,setCharacterToShow] = useState(20)

  useEffect (() => {
    let arrCharacters = []
    Object.values(props.json).forEach((subobject) => { 
      arrCharacters.push(subobject)})
    setCharacters(arrCharacters)  
    setCharacterToShow(0) 
    },[])
  
  function changeCharacter(x){
    setCharacterToShow(x)
  }

  return (
    <>
      <div className='titleBarCharacters'>
        <h1> Characters </h1>
        <div className='character-list'>
          {characterList.map((x,y)=>{
            return (
              <span key={y}onClick={() => changeCharacter(y)}>{x}</span>
            )
          })}
        </div> 
      </div> 
      {characterToShow == 20? <h1>Choose a character to show!</h1> :<div className='characContainer'>
        <img src={characters[characterToShow]['images']['main']} />
        <div className='characterShow'>
          <mark>FirstName:</mark> {characters[characterToShow]['name']['first']}
          <mark>MiddleName:</mark> {characters[characterToShow]['name']['middle']}
          <mark>LastName:</mark> {characters[characterToShow]['name']['last']}
          <mark>Age:</mark> {characters[characterToShow]['age']}
          <mark>Gender:</mark> {characters[characterToShow]['gender']}
          <mark>Occupation:</mark>{characters[characterToShow]['occupation']}
          <mark>Homeplanet:</mark>{characters[characterToShow]['homeplanet']} 
          <mark>Species:</mark>{characters[characterToShow]['species']} 
          <div className='sayings'>
            {characters[characterToShow]['sayings'].map((x,y)=> {
              return (<p key={y}>{x}</p>)
            })}
          </div>
        </div>
      </div>}
    </>
  )
}

export default Characters
