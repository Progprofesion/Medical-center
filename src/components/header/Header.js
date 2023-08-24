import { Link } from "react-router-dom";

import Form from "../form/Form";
import Modal from "../modal/Modal";
import Button from "../buttons/Button";
import logo from "../../assets/icon/logo.svg";

import "./header.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="header__header">
        <div className="header__content">
          <img src={logo} alt="Logo" className="header__img" />
          <div className="header__buttons">
            <Link to="/contacts">
              <Button title="Контакты" className="header__contacts" />
            </Link>
            <Button
              title={localStorage.getItem("login") ? "Выйти" : "Войти"}
              className="header__enter"
            />
          </div>
        </div>
      </div>
      <Modal>
        <Form />
      </Modal>
    </header>
  );
};

export default Header;
