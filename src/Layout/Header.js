import React from "react";
import "./Header.css";
import Cartimg from "./shopping-cart.png";
import Foodimg from "./tamanna-rumee-cvq_8XHp2rM-unsplash.jpg";
function Header(props) {
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
          <div className="num">0</div>
        </button>
      </div>
      <div className="body-img">
        <img src={Foodimg} alt="img1" />
      </div>
    </>
  );
}

export default Header;
