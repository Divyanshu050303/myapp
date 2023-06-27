import { useContext, useEffect, useState } from 'react'
import React from 'react'
import CartIcon from '../cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../Store/cart-context'
const HeaderCartButton = (props) => {
  const [btnIsHighLighted, setbtnIsHighLighted] = useState(false)
  const ctx= useContext(CartContext)
  const numberOfCartItem=ctx.item.reduce((curNumber,item)=>{
    return curNumber+item.amount
  },0)
 
  const btnClasses=`${classes.button} ${btnIsHighLighted ?classes.bump:""}`
  useEffect(()=>{
    if(ctx.items.length===0){
      return;
    }
    setbtnIsHighLighted(true)
    const timer=setTimeout(()=>{
      setbtnIsHighLighted(false);
    },300)
    return ()=>{
      clearTimeout(timer);
    }

  },[ctx])
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span> Your Cart </span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  )
}

export default HeaderCartButton
