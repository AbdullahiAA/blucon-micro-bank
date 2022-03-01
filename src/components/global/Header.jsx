import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__icon">
        <Link to="/">
          <img src={logo} alt="Blucon Microfinance Bank" />
        </Link>
      </div>

      <nav className="header__nav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/services">Service</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <NavLink to="/account">
            <button>Open Free Account</button>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
