import React from "react";
import "./Header.css";
import Cartimg from './shopping-cart.png'
import Foodimg from './tamanna-rumee-cvq_8XHp2rM-unsplash.jpg'
function Header() {
  return (
    <>
      <div className="container-nav">
        <div className="box-nav">
          <h3>React Meals</h3>
        </div>
        <nav>
          <span className="item" id="item2">
            Home
          </span>
          <span className="item" id="item3">
            About Us
          </span>
          <span className="item" id="item4">
            Contact Us
          </span>
        </nav>
        <div className="cart-nav">
          <img src={Cartimg} alt="Cartimg" />
          <h3> Your Cart</h3>
          <div className="num">
            0
          </div>
        </div>
      </div>
      <div className="body-img">
        <img src={Foodimg} alt="img1" />
      </div>
    </>
  );
}

export default Header;
