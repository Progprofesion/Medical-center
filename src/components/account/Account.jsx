import { Link } from "react-router-dom";
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
          <Link to="/contacts">
            <Button className="account__contacts" title="Перейти в контакты" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Account;
