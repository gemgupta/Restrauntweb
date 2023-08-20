import React from "react";

import Modal from "../UI/Modal";
import "./Cart.css";
function Cart() {
  const CartItems = (
    <ul className="Cart-item">
      {[{ id: 'c1', name: "Chole Bhathure", Amount: 2, price: 190 }].map(
        (item) => {
            return<li key={item.id}>{item.name}</li>;
          
        }
      )}
    </ul>
  );
  return (
    <Modal>
      {CartItems}
      <div className="total">
        <span>Amount</span>
        <span>380</span>
      </div>
      <div className="actions">
        <button className="button--alt"> Close</button>
        <button className="button"> Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
