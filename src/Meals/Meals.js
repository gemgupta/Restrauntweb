import React from "react";
import "./Meals.css";
import MealsForm from "./MealsForm";
const Meals1 = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
function Meals(props) {
  return (
    <section className="meals meallist">
      <ul>
        {Meals1.map((item) => (
          <div key={item.id} className="meals-1">
             <MealsForm/>
            <h3>{item.name}</h3>
            <div className="discription">{item.description}</div>
            <div className="price">INR {item.price}</div>
           
          </div>
        ))}
      </ul>
    </section>
  );
}

export default Meals;
