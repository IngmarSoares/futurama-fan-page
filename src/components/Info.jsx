import ('./styles/Info.css')


function Info(props) {

  return (
    <div className='info'>
      <img src='/public/futuramacharacters.png'/>
      <h1> Synopsis </h1>
      <h3> {props.json[0]['synopsis']}   </h3>
    </div>
  )
}

export default Info
