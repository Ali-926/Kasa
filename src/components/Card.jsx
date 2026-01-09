import { Link } from "react-router-dom";

function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`}>
      <article className="card">
        <img src={cover} alt={title} className="card__image" />
        <h2 className="card__title">{title}</h2>
      </article>
    </Link>
  );
}

export default Card;
