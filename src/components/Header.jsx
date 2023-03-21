import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
       <p>LOGO</p>
      </div>
      <ul className="nav-links">
        <li>
          <Link  to="#home">Home</Link>
        </li>
        <li>
          <Link smooth to="#about">About</Link>
        </li>
        <li>
          <Link  to="#login">Login</Link>
        </li>
        <li>
          <Link  to="#contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
  );
};

export default Header;
