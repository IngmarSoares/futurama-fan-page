import { useState, useEffect } from 'react'


function Characters() {
  let [Characters,setCharacters] = useState('')
  
  useEffect(() => {
    const fetchData = async (url) => {
      const response = await fetch(url);
      const json = await response.json();
      setCharacters(JSON.stringify(json[0]['synopsis']));
    }
  
    fetchData('/futurama/Characters')
      .catch(console.error);;
  }, [])

  return (
    <>
      <h1> Characters </h1>
      <h3> {Characters}   </h3>
    </>
  )
}

export default Characters
