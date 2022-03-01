import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import routeParams from "../../routeParams";

function Header() {
  return (
    <header className="header">
      <div className="header__icon">
        <Link to={routeParams.homePage}>
          <img src={logo} alt="Blucon Microfinance Bank" />
        </Link>
      </div>

      <nav className="header__nav">
        <ul>
          <li>
            <NavLink to={routeParams.homePage}>Home</NavLink>
          </li>
          <li>
            <NavLink to={routeParams.servicePage}>Service</NavLink>
          </li>
          <li>
            <NavLink to={routeParams.aboutPage}>About</NavLink>
          </li>
          <li>
            <NavLink to={routeParams.contactPage}>Contact</NavLink>
          </li>
          <NavLink to={routeParams.newAccount}>
            <button>Open Free Account</button>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
