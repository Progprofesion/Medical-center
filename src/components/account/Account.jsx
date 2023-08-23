import "./account.scss";
const Account = () => {
  let name = "Сергей";
  return (
    <section className="account">
      <div className="container">
        <h2 className="account__title">Привет, {name}</h2>
        <div className="account__buttons">
          <button className="account__exit">Выйти из аккаунта</button>
          <button className="account__contacts">Перейти в контакты</button>
        </div>
      </div>
    </section>
  );
};

export default Account;
