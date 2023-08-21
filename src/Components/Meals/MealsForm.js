import React from "react";
import { useContext } from "react";
import "./MealsForm.css";
import CartContext from "../Store/CartContext";
function MealsForm(props) {
  const Cartctx = useContext(CartContext);
  const AddItemHandler = (event) => {
    event.preventDefault();
    const quantity= document.getElementById(props.item.id).value
    Cartctx.addItem({...props.item,quantity: quantity});
  };
  return (
    <div className="meal-form">
      <form>
        <label htmlFor={props.item.id}>Amount</label>
        <input
          type="number"
          name="quant"
          id={props.item.id}
          min={1}
          max={5}
          defaultValue={1}
          step={1}
        />

        <button onClick={AddItemHandler} className="formbutton" type="submit">
          +Add
        </button>
      </form>
    </div>
  );
}

export default MealsForm;
