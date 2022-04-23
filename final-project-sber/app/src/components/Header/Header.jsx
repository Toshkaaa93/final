import React from "react";
import "./Header.css";
import CustomLink from "../CustomLink/CustomLink";

function Header() {
  return (
    <header>
      <nav className="nav-wrapper bg-color container-border">
        <ul className="navbar-list">
          <li className="nav-item">
            <CustomLink to="/posts">Главная</CustomLink>
          </li>
          <li className="nav-item">
            <CustomLink to="auth/signin">Войти</CustomLink>
          </li>
          <li className="nav-item">
            <CustomLink to="auth/signup">Зарегистрироваться</CustomLink>
          </li>
          <li className="nav-item">
            <CustomLink to="about">Личный кабинет</CustomLink>
          </li>
          <li className="nav-item">
            <CustomLink to="auth/signout">Выйти</CustomLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default React.memo(Header);
