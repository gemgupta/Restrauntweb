import React from "react";
import "./Meals.css";
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
function Meals() {
  return (
    <section className="meals meallist">
      <ul>
        {Meals1.map((item) => (
          <div className="meals-1">
            <li key={item.id}>
              <h3>{item.name}</h3>
            </li>
            <li>{item.description}</li>
            <li>INR {item.price}</li>
          </div>
        ))}
      </ul>
    </section>
  );
}

export default Meals;
