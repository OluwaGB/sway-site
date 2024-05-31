import React from 'react'

const Picture = (props) => {
  return (
    <div>
      <img id="picture" src={props.img}/>
    </div>
  )
}

export default Picture
