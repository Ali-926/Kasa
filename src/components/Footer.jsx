import logoFooter from "../assets/images/logo-footer.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="Kasa logo" className="footer__logo" />
      <p className="footer__text">© 2026 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
