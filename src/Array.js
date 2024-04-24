import React from 'react'

function Array() {
    const words=["List1","list2","List3"]
    const things=[11,12,13,14,15]
    const newList = things.map(list=><p title="List item">{list *2}</p>)
    function Add(){
       let  x = Math.floor(Math.random()*100);
        things.push(x);
        /*return things;*/
        console.log(things);
    }
function Wordings(){
   let  newWord =`List${words.length + 1}`;
    words.push(newWord);
    console.log(words);
}
  return (
    <div>

      {newList}
      <button onClick={Add}>Add</button>
      <button onClick={Wordings}>Add word</button>
    </div>
  )
}

export default Array
