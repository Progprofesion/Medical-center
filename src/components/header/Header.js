import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  setDataUsers,
  setLogin,
  setPassword,
  setModalActive,
} from "../../store/slices/userSlice";
import Modal from "../modal/Modal";
import Button from "../buttons/Button";
import logo from "../../assets/icon/logo.svg";

import "./header.scss";
const Header = () => {
  const dataUsers = useSelector((state) => state.user.dataUsers);
  const login = useSelector((state) => state.user.login);
  const password = useSelector((state) => state.user.password);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((data) => dispatch(setDataUsers(data)))
      .catch((error) => console.log("Ошибка загрузки данных:", error));
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dataUsers.forEach((data) => {
      if (data.login === login && data.password === password) {
        localStorage.setItem("login", login);
        localStorage.setItem("password", password);
        dispatch(setModalActive(false));
        return navigate("/account");
      } else {
        console.log("Неверный логин");
      }
    });
  };

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
      <Modal>
        <form className="modal__form" action="">
          Имя
          <input
            onChange={(e) => dispatch(setLogin(e.target.value))}
            placeholder="Введите имя"
            type="text"
          />
          Пароль
          <input
            onChange={(e) => dispatch(setPassword(e.target.value))}
            placeholder="Введите пароль"
            type="text"
          />
          <button
            onClick={(e) => handleSubmit(e)}
            className="modal__submit"
            type="submit"
          >
            Войти
          </button>
        </form>
      </Modal>
    </header>
  );
};

export default Header;
