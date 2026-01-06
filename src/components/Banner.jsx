function Banner({ image, title }) {
  return (
    <section className="banner">
      <img src={image} alt="Bannière" className="banner__image" />
      {title && <h1 className="banner__title">{title}</h1>}
    </section>
  );
}

export default Banner;
