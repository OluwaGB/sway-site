import React from 'react'

function Time() {
const d = new Date();
const  hours  =d.getHours();

  return (
    <div>
   {timeOfDay}   
    </div>
  )
}

export default Time
