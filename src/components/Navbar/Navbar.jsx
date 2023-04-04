import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import imgLogo from "../../assets/images/pngwing.com.png";

export const Navbar = () => {
  return (
    <nav className="container-navbar">
      <img className="logo" src={imgLogo} alt="Este es el logo de la empresa" />
      <ul className="menu">
        <li>Modelos</li>
        <li>Repuestos</li>
        <li>Novedades</li>
        <li>Contacto</li>
      </ul>
      <CartWidget />
    </nav>
  );
};
