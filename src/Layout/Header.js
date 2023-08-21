import React from "react";
import { useContext } from "react";
import "./Header.css";
import Cartimg from "./shopping-cart.png";
import Foodimg from "./tamanna-rumee-cvq_8XHp2rM-unsplash.jpg";
import CartContext from "../Components/Store/CartContext";
function Header(props) {
  const Cartctx = useContext(CartContext);
  let quantity = 0;
  Cartctx.item.forEach((item) => {
    quantity =   quantity + Number(item.quantity);
  });
  return (
    <>
      <div className="container-nav">
        <div className="box-nav">
          <h3>React Meals</h3>
        </div>
        <nav>
          <span className="item">Home</span>
          <span className="item">About Us</span>
          <span className="item">Contact Us</span>
        </nav>
        <button onClick={props.onOpen} className="cart-nav">
          <img src={Cartimg} alt="Cartimg" />
          <h3> Your Cart</h3>

          <div className="num">{quantity}</div>
        </button>
      </div>
      <div className="body-img">
        <img src={Foodimg} alt="img1" />
      </div>
    </>
  );
}

export default Header;
