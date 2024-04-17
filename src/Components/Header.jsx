import React, { useState } from "react";
import "./Header.css";
import Modal from "react-modal";
const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const modalContent = (
    <div>
      <h2>{`ебал тя))`}</h2>
      <video
        className="screamer"
        autoPlay
        src={`${process.env.PUBLIC_URL}/SVO.mp4`}
      ></video>
      <button onClick={closeModal}>Закрыть</button>{" "}
    </div>
  );
  return (
    <div className="header-wrapper">
      <a onClick={openModal} className="logo-link" href="#">
        <h1 className="logo">DODIK Pizza</h1>
        <h2 className="slogan">Хуевая пицца - для уебанов!</h2>{" "}
      </a>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        {modalContent}
      </Modal>
    </div>
  );
};

export default Header;
