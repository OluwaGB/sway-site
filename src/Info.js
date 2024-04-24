import React from 'react'
import  "./App.css"

function Info() {
    const info =[
        {
            name:"iyanuoluwa",
            age:23,
            sex:"male"
        },
        {
            name:"peter",
            age:23,
            sex:"male"
        },
        {
            name:"Oluwagbotemi",
            age:23,
            sex:"male"
        },
    ]
   const  information = info.map(infos=> <h3>My name is + {info.name} and i am {info.age} years old </h3>)
  return (
    <div>
     <h3>{information}</h3> 
    </div>
  )
}
export default Info;
/*export default{
    "success":true,
   "data":{"info":[ {
    name:"iyanuoluwa",
    age:23,
    sex:"male"
   },
    {
    name:"iyanuoluwa",
    age:23,
    sex:"male"
   }, {
    name:"iyanuoluwa",
    age:23,
    sex:"male"
   }
]
   }
    
}*/
