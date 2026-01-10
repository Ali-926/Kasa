import { useState } from "react";

function Gallery({ pictures }) {
  const [index, setIndex] = useState(0);
  const length = pictures.length;

  const next = () => setIndex((index + 1) % length);
  const prev = () => setIndex((index - 1 + length) % length);

  return (
    <div className="carousel">
      {length > 1 && (
        <>
          <button className="carousel__prev" onClick={prev}>
            ‹
          </button>
          <button className="carousel__next" onClick={next}>
            ›
          </button>
          <span className="carousel__count">
            {index + 1}/{length}
          </span>
        </>
      )}
      <img src={pictures[index]} alt="Logement" />
    </div>
  );
}

export default Gallery;
