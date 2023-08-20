import React from "react";
import "./MealsForm.css";
function MealsForm() {
  return (
    <div className="meal-form">
    <form >
     <label htmlFor="quant">Amount</label>
      <input type="number" name="quant" min={1} max={5} defaultValue={1} step={1}/>
      
    <button className="formbutton" type="submit">+Add</button>
    </form>
    </div>
  );
}

export default MealsForm;
