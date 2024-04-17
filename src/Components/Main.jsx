import "./Main.css";
import React from "react";
import OftenOrder from "./OftenOrder";
import ProductList from "./ProductList";

const Main = () => {
  return (
    <div className="main-wrapper">
      <div className="select-pizza">
        <ul className="select-pizza__items">
          <li className="select-pizza__item">
            <a className="select-pizza__item-link" href="">
              Пицца{" "}
            </a>
          </li>
          <li className="select-pizza__item">
            <a className="select-pizza__item-link" href="">
              Комбо
            </a>
          </li>
          <li className="select-pizza__item">
            <a className="select-pizza__item-link" href="">
              Напитки
            </a>
          </li>
          <li className="select-pizza__item">
            <a className="select-pizza__item-link" href="">
              Десерты
            </a>
          </li>
          <li className="select-pizza__item">
            <a className="select-pizza__item-link" href="">
              Соусы
            </a>
          </li>
        </ul>
      </div>
      <OftenOrder />
      <ProductList />
    </div>
  );
};

export default Main;
