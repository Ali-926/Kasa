import { useState } from "react";

function Collapse({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse">
      <button
        className="collapse__header"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="collapse__title">{title}</span>

        <i
          className={`fa-solid fa-chevron-up collapse__icon ${
            open ? "collapse__icon--open" : ""
          }`}
        ></i>
      </button>

      {open && <div className="collapse__content">{children}</div>}
    </div>
  );
}

export default Collapse;
