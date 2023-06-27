import './App.css';
import Header from './component/layout/Header';
import Meals from './component/meals/Meals';
import Cart from './component/cart/Cart';
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
    <div className="App">
    {cartIsShown && <Cart onClose={hideCartHandler}/>}
       <Header onShowCart={showCartHandler}/>
       <main>
        <Meals/>
       </main>

    </div>
  );
}

export default App;
