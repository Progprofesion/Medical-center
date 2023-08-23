import { useState } from "react";
import logo from "../../assets/icon/logo.svg";
import Modal from "../modal/Modal";
import "./header.scss";
const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = (e) => {
    if (e.target.className === "modal") {
      setShowModal(true);
    }
    setShowModal(!false);
  };
  return (
    <header className="header">
      {showModal ? <Modal /> : null}
      <div className="header__header">
        <div className="header__content">
          <img src={logo} alt="Logo" className="header__img" />
          <div className="header__buttons">
            <button className="header__contacts">Контакты</button>
            <button
              onClick={(e) => handleOpenModal(e)}
              className="header__enter"
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
