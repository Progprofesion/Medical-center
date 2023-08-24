import { useState } from "react";
import Modal from "../modal/Modal";
import logo from "../../assets/icon/logo.svg";

import "./header.scss";
const Header = () => {
  const [modalActive, setModalActive] = useState(true);

  return (
    <header className="header">
      <div className="header__header">
        <div className="header__content">
          <img src={logo} alt="Logo" className="header__img" />
          <div className="header__buttons">
            <button className="header__contacts">Контакты</button>
            <button
              className="header__enter"
              onClick={() => setModalActive(true)}
            >
              Войти
            </button>
          </div>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <input type="text" className="modal__login" />
        <input type="text" className="modal__login" />
      </Modal>
    </header>
  );
};

export default Header;
