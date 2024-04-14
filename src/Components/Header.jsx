import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-wrapper">
      <a className="logo-link" href="/">
        <h1 className="logo">DODIK Pizza</h1>
        <h2 className="slogan">Хуевая пицца - для уебанов!</h2>{" "}
      </a>
    </div>
  );
};

export default Header;
