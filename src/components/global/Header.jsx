import React, { useState } from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, NavLink } from "react-router-dom";
import routeParams from "../../routeParams";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <div className="header__icon">
        <Link to={routeParams.homePage}>
          <img src={logo} alt="Blucon Microfinance Bank" />
        </Link>
      </div>

      <div
        className="header__menuToggle"
        onClick={() => setShowMenu((prevValue) => !prevValue)}
      >
        {showMenu === false ? <MenuIcon /> : <CloseIcon />}
      </div>

      <nav className={`header__nav ${showMenu ? "showMenu scale-up-tr" : ""}`}>
        <ul>
          <li>
            <NavLink to={routeParams.homePage}>Home</NavLink>
          </li>
          <li>
            <NavLink to={routeParams.servicePage}>Services</NavLink>
          </li>
          <li>
            <NavLink to={routeParams.aboutPage}>About</NavLink>
          </li>
          <li>
            <NavLink to={routeParams.contactPage}>Contact</NavLink>
          </li>
          <Link className="header__btn" to={routeParams.newAccount}>
            <button>Open Free Account</button>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
