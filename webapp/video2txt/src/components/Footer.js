import logo from "../assests/img/logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Your Logo" className="logo" />
      <p className="copyright">© 2024 Holland Lee. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
