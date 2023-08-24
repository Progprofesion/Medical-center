import Button from "../buttons/Button";
import "./account.scss";
const Account = () => {
  return (
    <section className="account">
      <div className="container">
        <h2 className="account__title">
          Привет, {localStorage.getItem("login")}
        </h2>
        <div className="account__buttons">
          <Button className="account__exit" title="Выйти из аккаунта" />
          <Button className="account__contacts" title="Перейти в контакты" />
          {/* <button className="account__exit">Выйти из аккаунта</button>
          <button className="account__contacts">Перейти в контакты</button> */}
        </div>
      </div>
    </section>
  );
};

export default Account;
