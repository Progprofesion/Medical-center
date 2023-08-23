import Card from "../card/Card";
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
          <button className="main__enter">Войти</button>
          <button className="main__contacts">Контакты</button>
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
