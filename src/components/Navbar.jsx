import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo-kasa.png";

function Navbar() {
  return (
    <header className="navbar">
      <img src={logo} alt="Kasa" className="navbar__logo" />

      <nav className="navbar__nav">
        <NavLink to="/" className="navbar__link">
          Accueil
        </NavLink>
        <NavLink to="/about" className="navbar__link">
          À propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
