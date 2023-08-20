import Header from "./Layout/Header";
import MealsSummary from "./Meals/MealsSummary";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";
import { useState } from "react";
function App() {
  const [showCart, setshowCart] = useState(false);
  const closeCart = () => {
    setshowCart(false);
  };
  const openCart = () => {
    setshowCart(true);
  };
  return (
    <>
      {showCart && <Cart onClose={closeCart} />}
      <Header onOpen={openCart} />
      <MealsSummary />
      <Meals />
    </>
  );  
}

export default App;
