import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <p>Copyright &copy; 2023 My Website | Developer: Pawan Kashyap</p>
        <ul class="list-inline">
          <li class="list-inline-item">
            <Link className="links" to="#">Privacy </Link>
          </li>
          <li class="list-inline-item">
            <Link className="links" to="#">Terms </Link>
          </li>
          <li class="list-inline-item">
            <Link className="links" to="#">Contact </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
