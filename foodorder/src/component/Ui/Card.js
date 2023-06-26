import React from 'react'
import Classes from './Card.module.css'
const Card = (Props) => {
  return (
    <div className={Classes.card}>
      {Props.children}
    </div>
  )
}

export default Card
