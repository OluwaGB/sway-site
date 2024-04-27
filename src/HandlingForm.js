import React from 'react'
import { useState } from 'react'

function HandlingForm() {
    const[name,setName]= useState('')
  return (
    <div>
      <form>
        <label>Enter your name below
            <input type="text" value= {name} onChange={(e)=>setName(e.target.value)}/>
        </label>
        </form>
    </div>
  )
}

export default HandlingForm
