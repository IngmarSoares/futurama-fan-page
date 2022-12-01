import { useState, useEffect } from 'react'


function Cast() {
  let [Cast,setCast] = useState('')
  
  useEffect(() => {
    const fetchData = async (url) => {
      const response = await fetch(url);
      const json = await response.json();
      setCast(JSON.stringify(json[0]['synopsis']));
    }
  
    fetchData('/futurama/Cast')
      .catch(console.error);;
  }, [])

  return (
    <>
      <h1> Cast </h1>
      <h3> {Cast}   </h3>
    </>
  )
}

export default Cast
