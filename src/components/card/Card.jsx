import "./card.scss";
const Card = ({ img, title }) => {
  return (
    <article className="card">
      <div className="card__imgWrapper">
        <img src={img} alt="" className="body__img" />
      </div>
      <p className="card__title">{title}</p>
      <span></span>
      <div className="card__subtitle">Рыба текст</div>
    </article>
  );
};

export default Card;
