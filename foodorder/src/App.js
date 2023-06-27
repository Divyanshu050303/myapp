import './App.css';
import Header from './component/layout/Header';
import Meals from './component/meals/Meals';
import Cart from './component/cart/Cart';
import CartProvider from './Store/CartProvider';
import { useState } from 'react';
function App() {
  const [cartIsShown, setCartIsShown]=useState(false);
  const showCartHandler=()=>{
    setCartIsShown(true);
  }
  const hideCartHandler=()=>{
    setCartIsShown(false);
  }
  return (
    
    <CartProvider className="App">
    {cartIsShown && <Cart onClose={hideCartHandler}/>}
       <Header onShowCart={showCartHandler}/>
       <main>
        <Meals/>
       </main>

    </CartProvider>
  );
}

export default App;
