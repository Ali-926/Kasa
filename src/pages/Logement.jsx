import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import Gallery from "../components/Gallery";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";
import Tags from "../components/Tags";

function Logement() {
  const { id } = useParams();

  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/404" />;
  }

  const {
    title,
    location,
    pictures,
    description,
    equipments,
    host,
    rating,
    tags,
  } = logement;

  return (
    <section className="logement">
      <Gallery pictures={pictures} />

      <div className="logement__header">
        <div>
          <h1>{title}</h1>
          <p>{location}</p>
          <Tags tags={tags} />
        </div>

        <div className="logement__host">
          <div className="host">
            <p>{host.name}</p>
            <img src={host.picture} alt={host.name} />
          </div>
          <Rating rating={rating} />
        </div>
      </div>

      <div className="logement__collapses">
        <Collapse title="Description">
          <p>{description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul>
            {equipments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </section>
  );
}

export default Logement;
