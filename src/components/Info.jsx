import { useState, useEffect } from 'react'


function Info(props) {

  return (
    <>
      <h1> Synopsis </h1>
      <h3> {props.json[0]['synopsis']}   </h3>
    </>
  )
}

export default Info
