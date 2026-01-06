import logements from "../data/logements.json";
import Banner from "../components/Banner";
import Card from "../components/Card";
import bannerImage from "../assets/images/banner.jpg";

function Home() {
  return (
    <>
      <Banner image={bannerImage} title="Chez vous, partout et ailleurs" />

      <section className="gallery">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </>
  );
}

export default Home;
