import React, { useState } from 'react'

function FormHandling2() {
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(`the name you entered was:${name}`)
    }
    const[name,setName]= useState('')
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        </label>
      </form>
    </div>
  )
}

export default FormHandling2
