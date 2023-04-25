import { Cartwidget } from "../Cartwidget/Cartwidget";
import TallerdeAutos from "../../assets/img/pngwing.com.png";
import { Outlet, Link, NavLink } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar__cartwidget">
      <div>
        <div className="navbar">
          <Link to="/">
            {" "}
            <img src={TallerdeAutos} className="navbar__logo" alt="" />
          </Link>
          <ul className="navbar__links">
            <NavLink to="/" className="navbar__li">
              Todos los autos
            </NavLink>
            <NavLink to="/category/Nissan" className="navbar__li">
              Nissan
            </NavLink>
            <NavLink to="/category/BMW" className="navbar__li">
              BMW
            </NavLink>
            <NavLink to="/category/novedades" className="navbar__li">
              Novedades
            </NavLink>
          </ul>
          <Cartwidget />
        </div>

        <Outlet />
      </div>
    </div>
  );
};
