import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="nav-wrapper bg-color container-border my-5">
      <ul className="navbar-list">
        <li>
          <div>
            <Link className="navbar-brand" to="/">
              Главная страница
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="about">
            О нас
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="info">
            Контакты
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="myaccount">
            Мой кабинет
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
