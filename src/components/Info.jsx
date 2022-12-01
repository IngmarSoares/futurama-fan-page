import { useState, useEffect } from 'react'


function Info() {
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
    <>
      <h1> Synopsis </h1>
      <h3> {info}   </h3>
    </>
  )
}

export default Info
