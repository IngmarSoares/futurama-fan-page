import { useState, useEffect } from 'react'
import ('./css/Episodes.css')


function Episodes(props) {
  let [episodes,setEpisodes] = useState(null)
 
  let arrObjects = []
  Object.values(props.json).forEach((subobject) => { 
    arrObjects.push(subobject)
  })
  
  return (
    <>
      <h1> Episodes </h1>
        <div className='episode-list'> {arrObjects.map(x=> {
          return (
            <div key={x['id']} className='episode'>
            <p>Episode Number: {x['number']}</p>
            <p>Episode Title: {x['title']}</p>
            <p>Episode Writers: {x['writers']}</p>
            <p>Episode Air Date: {x['originalAirDate']}</p>
            <p>Episode Description: {x['desc']}</p>
            <br />
            </div>
          )
      })} </div>
    </>
  )
}

export default Episodes
