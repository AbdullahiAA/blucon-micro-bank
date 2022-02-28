import React from 'react'
import "./Header.css"
import logo from "../../images/logo.png"

function Header() {
  return (
    <div className='header'>
        <div className="header__icon">
            <img src={logo} alt="Blucon Microfinance Bank" />
        </div>


            <nav className="header__nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <button>Open From Account</button>
                </ul>
            </nav>

    </div>
  )
}

export default Header