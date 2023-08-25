import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import "./account.scss";
const Account = () => {
  return (
    <section className="account">
      <div className="container">
        <h2 className="account__title">
          Привет, {localStorage.getItem("name")}
        </h2>
        <div className="account__buttons">
          <Button className="account__exit" title="Выйти из аккаунта" />
          <Link className="account__contacts" to="/contacts">
            Перейти в контакты
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Account;
