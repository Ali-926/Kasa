import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo-kasa.png";

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar__logo">
        <img src={logo} alt="Kasa logo" />
      </NavLink>

      <nav className="navbar__nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `navbar__link ${isActive ? "active" : ""}`
          }
        >
          Accueil
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `navbar__link ${isActive ? "active" : ""}`
          }
        >
          À propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
