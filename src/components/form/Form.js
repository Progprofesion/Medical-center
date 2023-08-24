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
  const auth = useSelector((state) => state.user.auth);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dataUsers.forEach((data) => {
      if (data.login === login && data.password === password) {
        localStorage.setItem("login", login);
        localStorage.setItem("password", password);
        dispatch(setModalActive(false));
        dispatch(setAuth(true));
        localStorage.setItem("auth", true);
        return navigate("/account");
      } else {
        setErrorAuth(true);
      }
    });
  };
  console.log(auth);
  return (
    <form className="modal__form" action="">
      Имя
      <input
        className="enterView__input"
        {...register("login", {
          required: "Поле обязательно к заполнению",
          pattern: {
            value: /[A-Za-z]/,
            message: "Только буквы",
          },
        })}
        type="text"
        placeholder="Имя"
        onChange={(e) => dispatch(setLogin(e.target.value))}
      />
      {errors.login ? (
        <p className="basketView__form-errorMessage">{errors.login.message}</p>
      ) : null}
      Пароль
      <input
        className="enterView__input"
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
        <p className="basketView__form-errorMessage">
          {errors.password.message}
        </p>
      ) : null}
      <button
        onClick={(e) => handleSubmit(e)}
        className="modal__submit"
        type="submit"
      >
        Войти
      </button>
      <p>{errorAuth ? "Неправльное имя или пароль" : null}</p>
    </form>
  );
};

export default Form;
