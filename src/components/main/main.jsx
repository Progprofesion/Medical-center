import Card from "../card/Card";
import Button from "../buttons/Button";
import cardiogram from "../../assets/icon/cardiogram.svg";
import stethoscope from "../../assets/icon/stethoscope.svg";
import medicalhistory from "../../assets/icon/medical-history.svg";

import "./main.scss";
const main = () => {
  return (
    <section className="main">
      <div className="container">
        <h1 className="main__title">Место для получения медицинской помощи</h1>
        <div className="main__buttons">
          <Button
            title={localStorage.getItem("login") ? "Выйти" : "Войти"}
            className="main__enter"
          />
          <Button title="Контакты" className="main__contacts" />
        </div>
        <div className="main__cardsWrapper">
          <Card img={cardiogram} title="Онлайн-прием" />
          <Card img={stethoscope} title="Экстренный Случай" />
          <Card img={medicalhistory} title="Лечение рака" />
        </div>
      </div>
    </section>
  );
};

export default main;
