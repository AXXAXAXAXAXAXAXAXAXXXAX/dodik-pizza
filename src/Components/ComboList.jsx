import React from "react";
import pizza from "../combo.json";
import "./ComboList.css";

const ComboList = () => {
  return (
    <div className="combo-wrapper">
      <h2>Комбо</h2>
      <ul className="combos">
        {pizza.pizza.map((item, i) => (
          <li className="combo" key={i}>
            <img className="combo-img" src={item.image} alt={item.name} />
            <h3 className="combo-name">{item.name}</h3>
            <p className="combo-description">{item.description}</p>
            <div className="price-n-order">
              <p className="combo-price">От {item.price}₽</p>
              <button className="combo-buy">Отравиться</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComboList;
