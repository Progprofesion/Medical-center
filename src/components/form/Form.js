import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setDataUsers } from "../../store/slices/userSlice";

import {
  setLogin,
  setPassword,
  setModalActive,
  setAuth,
} from "../../store/slices/userSlice";
import "./form.scss";

const Form = () => {
  const [errorAuth, setErrorAuth] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((data) => dispatch(setDataUsers(data)))
      .catch((error) => console.log("Ошибка загрузки данных:", error));
  }, [dispatch]);

  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const dataUsers = useSelector((state) => state.user.dataUsers);
  const login = useSelector((state) => state.user.login);
  const password = useSelector((state) => state.user.password);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dataUsers.find((data) => {
      if (data.login === login && data.password === password) {
        localStorage.setItem("login", login);
        localStorage.setItem("password", password);
        localStorage.setItem("name", data.name);
        dispatch(setModalActive(false));
        dispatch(setAuth(true));
        localStorage.setItem("auth", true);
        return navigate("/account");
      } else {
        setErrorAuth(true);
      }
      return null;
    });
  };

  return (
    <form className="form" action="">
      Логин
      <input
        className="form__input"
        {...register("login", {
          required: "Поле обязательно к заполнению",
          pattern: {
            value: /[A-Za-z]/,
            message: "Только буквы",
          },
        })}
        type="text"
        placeholder="Логин"
        onChange={(e) => dispatch(setLogin(e.target.value))}
      />
      {errors.login ? (
        <p className="basketView__form-errorMessage">{errors.login.message}</p>
      ) : null}
      Пароль
      <input
        className="form__input"
        {...register("password", {
          required: "Поле обязательно к заполнению",
          minLength: {
            value: 8,
            message: "Минимум 8 знаков",
          },
        })}
        type="password"
        placeholder="Пароль"
        onChange={(e) => dispatch(setPassword(e.target.value))}
      />
      {errors.password ? (
        <p className="form__errorMessage">{errors.password.message}</p>
      ) : null}
      <button
        onClick={(e) => handleSubmit(e)}
        className="form__submit"
        type="submit"
      >
        Войти
      </button>
      <p>{errorAuth ? "Неправльное имя или пароль" : null}</p>
    </form>
  );
};

export default Form;
