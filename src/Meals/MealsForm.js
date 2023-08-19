import React from "react";
import "./MealsForm.css";
function MealsForm() {
  return (
    <div className="meal-form">
      <label htmlFor="quant"> Amount</label>
      <input type="number" name="quant" id="quant" value={1}/>
      <button type="submit">+Add</button>
    </div>
  );
}

export default MealsForm;
