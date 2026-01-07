import { useState } from "react";

function Gallery({ pictures }) {
  const [index, setIndex] = useState(0);
  const length = pictures.length;

  const next = () => setIndex((index + 1) % length);
  const prev = () => setIndex((index - 1 + length) % length);

  return (
    <div className="gallery">
      {length > 1 && (
        <>
          <button className="gallery__prev" onClick={prev}>
            ‹
          </button>
          <button className="gallery__next" onClick={next}>
            ›
          </button>
          <span className="gallery__count">
            {index + 1}/{length}
          </span>
        </>
      )}
      <img src={pictures[index]} alt="Logement" />
    </div>
  );
}

export default Gallery;
