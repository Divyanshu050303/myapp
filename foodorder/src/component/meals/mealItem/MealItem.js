import React from 'react'
const price='$${props.price}'
const MealItem = (props) => {
  return (
     <li>
        <div> <h3>{props.name}</h3>
        <div>{props.discription}</div>
        <div>{props.price}</div>
        </div>
        <div></div>
     </li>
  )
}

export default MealItem
