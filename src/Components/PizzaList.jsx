import React from "react";
import pizza from "../pizza.json";
import "./PizzaList.css";

const PizzaList = () => {
  return (
    <div className="pizzalist-wrapper">
      <h2>Пицца</h2>
      <ul className="pizzas">
        {pizza.pizza.map((item, i) => (
          <li className="pizza" key={i}>
            <img className="pizza-img" src={item.image} alt={item.name} />
            <h3 className="pizza-name">{item.name}</h3>
            <p className="pizza-description">{item.description}</p>
            <div className="price-n-order">
              <p className="pizza-price">От {item.price}₽</p>
              <button className="pizza-buy">Отравиться</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzaList;
