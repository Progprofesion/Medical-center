import { Link } from "react-router-dom";
import Card from "../card/Card";
import Button from "../buttons/Button";
import cardiogram from "../../assets/icon/cardiogram.svg";
import stethoscope from "../../assets/icon/stethoscope.svg";
import medicalhistory from "../../assets/icon/medical-history.svg";

import "./main.scss";
const main = () => {
  return (
    <main className="main">
      <div className="container">
        <h1 className="main__title">
          Место для получения <br /> медицинской помощи
        </h1>
        <div className="main__buttons">
          <Button
            title={localStorage.getItem("login") ? "Выйти" : "Войти"}
            className="main__enter"
          />
          <Link className="main__contacts" to="/contacts">
            Контакты
          </Link>
        </div>
        <div className="main__cardsWrapper">
          <Card img={cardiogram} title="Онлайн-прием" />
          <Card img={stethoscope} title="Экстренный Случай" />
          <Card img={medicalhistory} title="Лечение рака" />
        </div>
      </div>
    </main>
  );
};

export default main;
