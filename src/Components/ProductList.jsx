import React from "react";
import products from "../products.json";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="products-wrapper">
      <div className="pizza">
        <h2>Пицца</h2>
        <ul className="products">
          {products.pizza.map((item, i) => (
            <li className="product" key={i}>
              <img className="product-img" src={item.image} alt={item.name} />
              <h3 className="product-name">{item.name}</h3>
              <p className="product-description">{item.description}</p>
              <div className="price-n-order">
                <p className="product-price">От {item.price}₽</p>
                <button className="product-buy">Отравиться</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="combo">
        <h2>Комбо</h2>
        <ul className="products">
          {products.combo.map((item, i) => (
            <li className="product" key={i}>
              <img className="product-img" src={item.image} alt={item.name} />
              <h3 className="product-name">{item.name}</h3>
              <p className="product-description">{item.description}</p>
              <div className="price-n-order">
                <p className="product-price">От {item.price}₽</p>
                <button className="product-buy">Отравиться</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="drink">
        <h2>Напитки</h2>
        <ul className="products">
          {products.drink.map((item, i) => (
            <li className="product" key={i}>
              <img className="product-img" src={item.image} alt={item.name} />
              <h3 className="product-name">{item.name}</h3>
              <p className="product-description">{item.description}</p>
              <div className="price-n-order">
                <p className="product-price">От {item.price}₽</p>
                <button className="product-buy">Отравиться</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="dessert">
        <h2>Десерты</h2>
        <ul className="products">
          {products.dessert.map((item, i) => (
            <li className="product" key={i}>
              <img className="product-img" src={item.image} alt={item.name} />
              <h3 className="product-name">{item.name}</h3>
              <p className="product-description">{item.description}</p>
              <div className="price-n-order">
                <p className="product-price">От {item.price}₽</p>
                <button className="product-buy">Отравиться</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="sause">
        <h2>Соусы</h2>
        <ul className="products">
          {products.sause.map((item, i) => (
            <li className="product" key={i}>
              <img className="product-img" src={item.image} alt={item.name} />
              <h3 className="product-name">{item.name}</h3>
              <p className="product-description">{item.description}</p>
              <div className="price-n-order">
                <p className="product-price">От {item.price}₽</p>
                <button className="product-buy">Отравиться</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
