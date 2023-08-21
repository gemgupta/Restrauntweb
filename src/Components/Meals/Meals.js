import React from "react";
import "./Meals.css";
import MealsForm from "./MealsForm";
const Meals1 = [
  {
    id: "m1",
    name: "Choley Bhature",
    description:
      "It is a beloved North Indian dish featuring crispy fried bhature bread with spiced chickpeas",
    price: 190,
  },
  {
    id: "m2",
    name: "Paneer Tikka",
    description: "Paneer Tikka showcases marinated paneer cubes, infused with spices, yogurt, and tangy lemon juice.",
    price: 300,
  },
  {
    id: "m3",
    name: "Rasmalai",
    description: "Something in sweets",
    price: 60,
  },
  {
    id: "m4",
    name: "South Indian Platter",
    description: "It includes three iconic dishes: idli, uthappam, and dosa",
    price: 375,
  },
];
function Meals() {
  return (
    <section className="meals meallist">
      <ul>
        {Meals1.map((item) => (
          <div key={item.id} className="meals-1">
            <MealsForm item={item} />
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
