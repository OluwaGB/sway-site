import React from 'react'

function State() {
   /* to destructure the below code so as to get ontthe state value*/
   const [isImportant,setisImportant] = React.useState('yes');
   //setResult("No");
   //console.log(result);
   function handleClick(){
    setisImportant("No");
   }
  return (
    <div className='state'>
      
        <h1 className='state--value'>Is state important to know</h1>
<div className='state-value' onClick={handleClick}>
<button className='state-value' onClick={handleClick}>Click me </button>
    <h1>Click here to get the answer</h1>
</div>
    </div>
  )
}

export default State
