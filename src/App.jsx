import { useState, useEffect } from 'react'
import Addform from "AddForm";
import ShoppingList from "ShoppingList";
import './App.css'



function App() {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [totalSum, setTotalSum] = useState(0);
}  


console.log("Cart", cart)


useState(() => {


useEffect(() => {
    const totalQuantity = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
    setCartQuantity(totalQuantity);
    const total = cart.reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 0)), 0);
    setTotalSum(total);
  }, [cart]);


  const totalQuantity = cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
}

 /*
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  setTotalSum(total)
}, [cart]); 
  


  return (
    <main>
      <AddForm setCart={setCart} />
      <ShoppingList cart={cart} setCart={setCart} />
      <div>Items: {cartQuantity} — Total: ${totalSum.toFixed(2)}</div>
    </main>
  );
}

export default App

