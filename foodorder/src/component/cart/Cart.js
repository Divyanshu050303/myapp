import React, { useContext } from 'react'
import Modal from '../Ui/Modal';
import classes from "./Cart.module.css";
import CartContext from '../../Store/cart-context';
import CartItem from './CartItem';
const Cart = (props) => {
  const cartCtx = useContext(CartContext)
  const totolAmount=`$${cartCtx.totalAmount.toFixed(2)}`
  const hasItem=cartCtx.items.length>0
  const cartItemRemoveHandler=id =>{
    cartCtx.removeItem(id);
  }
  const cartItemAddHandler=item =>{
    cartCtx.addItem(item);
  }
  const cartItem = <ul className={classes['cart-items']}>{cartCtx.items.map((item) => <CartItem key={item.id} amount={item.amount} price={item.price} name={item.name} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)}/>)}</ul>
  return (
    <Modal onClose={props.onClose}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totolAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        { hasItem &&<button className={classes.button}>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart
