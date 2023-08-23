import logo from "../../assets/icon/logo.svg";
import "./mainPage.scss";
const MainPage = () => {
  return (
    <section className="mainPage">
      <div className="mainPage__header">
        <div className="mainPage__content">
          <img src={logo} alt="Logo" className="mainPage__img" />
          <div className="mainPage__buttons">
            <button className="mainPage__contacts">Контакты</button>
            <button className="mainPage__enter">Войти</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
