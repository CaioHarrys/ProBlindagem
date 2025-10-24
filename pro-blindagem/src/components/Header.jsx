import React, { useState } from "react";
import "../assets/css/Header.css"; 
import logo from "../assets/logo/LogoSemFundoNoba.png"; // ajuste o caminho se necessário
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <ul>
            <li><a href="#quem-somos">Quem Somos</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#pacotes">Pacotes</a></li>
            <li><a href="#avaliacoes">Avaliações</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
