import { useState } from "react";
import Modal from "../modal/Modal";
import Button from "../buttons/Button";
import logo from "../../assets/icon/logo.svg";

import "./header.scss";
const Header = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <header className="header">
      <div className="header__header">
        <div className="header__content">
          <img src={logo} alt="Logo" className="header__img" />
          <div className="header__buttons">
            <Button title="Контакты" className="header__contacts" />
            <Button
              title="Войти"
              setModalActive={() => setModalActive(true)}
              className="header__enter"
            />
          </div>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        Имя
        <input placeholder="Введите имя" type="text" className="modal__login" />
        Пароль
        <input
          placeholder="Введите пароль"
          type="text"
          className="modal__login"
        />
      </Modal>
    </header>
  );
};

export default Header;
