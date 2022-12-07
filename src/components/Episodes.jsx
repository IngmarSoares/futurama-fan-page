import ('./styles/Episodes.css')
import ('../options/options.js')
import { useEffect, useState } from 'react'
import { options } from '../options/options.js'
import Option from './Option'


function Episodes(props) {

  const [allEpisodes,setAllEpisodes] = useState([])
  const [episodes,setEpisodes] = useState([])
 
  

  useEffect (() => {

  let arrObjects = []
  Object.values(props.json).forEach((subobject) => { 
    arrObjects.push(subobject)
  })
  setAllEpisodes(arrObjects)
  setEpisodes(arrObjects)
    
  },[])
  
  function filterEpisodes() {
    setEpisodes(allEpisodes.filter((x,y) => {

      switch(document.getElementById('season').value) {
        case 'all':
          return y>=0
        case 'one':
          return y>=0 && y<9
        case 'two':
          return y>=9 && y<29
        case 'three':
          return y>=29 && y<44
        case 'four':
          return y>=44 && y<56
        case 'five':
          return y>=56 && y<72
        case 'six':
          return y>=89 && y<102
        case 'seven':
          return y>=102 && y<115
        case 'eight':
          return y>=115 && y<129

        default: setResult('all')
      }
    }).filter(x => x['originalAirDate'].includes(document.getElementById('year').value)).filter(x => x['writers'].includes(document.getElementById('writers').value)))
  }

  return (
    <>
      
      <div className='titleBarEpisodes'>
        <h1> Episodes </h1>
        <h3>  Filter: </h3>
        <form id='filter'>
        <label htmlFor="filter">Season:</label>
          <select onChange={filterEpisodes} name="season" id="season" form="filter" >
            {options[0].map(x => <Option key={x[0]} value={x[0]} children={x[1]} /> )} 

          </select>
          <label htmlFor="filter">Episode Year:</label>
          <select onChange={filterEpisodes} name="year" id="year" form="filter">
            {options[1].map(x => <Option key={x[0]} value={x[0]} children={x[1]} /> )}
          </select>
          <label htmlFor="filter">Episode Writers:</label>
          <select onChange={filterEpisodes} name="season" id="writers" form="filter">
            {options[2].map(x => <Option key={x[0]} value={x[0]} children={x[1]} /> )}
          </select>

        </form>
      </div> 
      <div className='episode-list'> 
        {episodes.length > 0? episodes.map(x=> {
          return (
            <div key={x['id']} className='episode'>
              <p><mark>Episode Number:</mark> {x['number']}</p>
              <p><mark>Episode Title:</mark> {x['title']}</p>
              <p><mark>Episode Writers:</mark> {x['writers']}</p>
              <p><mark>Episode Air Date:</mark> {x['originalAirDate']}</p>
              <p><mark>Episode Description:</mark> {x['desc']}</p>
              <br />
            </div>
        )}) : 
              <div className='error'> 
              <h1> No episodes to show! </h1> 
              <img src='./notfound.gif'/> 
              </div>}
      </div>
    </>
  )
}

export default Episodes
