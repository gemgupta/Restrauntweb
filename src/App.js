import Header from "./Layout/Header";
import MealsSummary from "./Components/Meals/MealsSummary";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./Components/Store/CartProvider";
function App() {
  const [showCart, setshowCart] = useState(false);
  const closeCart = () => {
    setshowCart(false);
  };
  const openCart = () => {
    setshowCart(true);
  };
  return (
    <CartProvider>
      {showCart && <Cart onClose={closeCart} />}
      <Header onOpen={openCart} />
      <MealsSummary />
      <Meals />
    </CartProvider>
  );  
}

export default App;
