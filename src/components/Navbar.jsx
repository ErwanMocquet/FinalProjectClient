import "../css/Navbar.css";
import logo from "../img/logo.png";
import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Navbar() {
    return (
      <nav className="nav-cont">
        <div className="logo-cont">
          <Link to="/"><img src={logo} alt="Provide Business - Database Logo" className="logo"/></Link>
        </div>
        <ul className="nav-items">
          <li className="nav-item special-nav-item">
            Services
            <KeyboardArrowDownIcon/>
            <ul className="dropdown">
              <li>
                <a href="https://providebusiness.dk">Provide Business</a>
              </li>
              <li>
                <Link to="/pbdatabase">Provide Business - Database</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/referencer">Referencer</Link>
          </li>
          <li className="nav-item">
            <Link to="/produkter">Produkter</Link>
          </li>
          <li className="nav-item">
            <Link to="/kontakt">Kontakt</Link>
          </li>
        </ul>
        <div className="nav-buttons">
          <Link to="/register" className="btn">Få adgang</Link>
          <Link to="/login" className="nav-item login-hover">Log på</Link>
        </div>
      </nav>
    );
  }