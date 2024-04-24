import React from 'react'
import './App.css'



/*const Article = (img,rating,review,price)=>{
    return(
<div id="card1">
<div className='cardbadge'>SOLD OUT</div>
<img src={img}/>
<h4>{rating}</h4>
<p>{review}</p>
<h5>{price}</h5>
</div>
    )
}*/


const Article = (props)=>{
    return(
<div id="card1">
<div className='cardbadge'>Review</div>
<img id ="fImage"src={props.img}/>
<h4>{props.rating}</h4>
<p>{props.reviews}</p>
<h5>{props.price}</h5>
</div>
    )
}
export default Article