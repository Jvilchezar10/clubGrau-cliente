// src/components/Nav.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <nav className="nav">
        <div className="contact-info">
          <span>Teléfono: (073) - 309930</span>
          <span>Email: contacto@club-grau.com</span>
        </div>
        <div className="main-nav">
          <a className="logo" href="https://club-grau.com/">
            <span className="logo_text">CLUB GRAU</span>
            <span className="logo_slogan">Piura 1885</span>
          </a>
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            {/* Agregar aquí otros elementos de navegación */}
          </ul>
        </div>
        <div className="linea"></div>
      </nav>
    </div>
  );
};

export default Nav;
