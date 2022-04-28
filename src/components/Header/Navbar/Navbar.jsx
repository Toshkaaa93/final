import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { setSearchValue } from "../../../redux/actions/searchAC";
import "./Navbar.css";
const Navbar = () => {
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    dispatch(setSearchValue(e.target.value.trim()));
  };
// <navclassName="d-flex justify-content-between nav-wrapper bg-color fixed-top">
  return (
    <nav className="justify-content-between nav-wrapper bg-color">
      
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
        <li className="nav-item">
          <NavLink className="nav-link" to="signin">
            Войти
          </NavLink>
        </li>
      </ul>
      <form className="d-flex me-4 justify-content-center">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Поиск постов"
          inputProps={{ "aria-label": "Search" }}
          onChange={searchHandler}
        />
        <button className="btn btn-outline-primary" type="submit">
          Поиск
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
