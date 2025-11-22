import React from "react";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Exemplo de ícones, use sua biblioteca favorita
import "../assets/css/Footer.css";

const REDES_SOCIAIS = [
  // { icone: FaTwitter, url: "https://twitter.com/seuusuario" },
  { icone: FaInstagram, url: "https://www.instagram.com/problindagens?igsh=eWMxYXJ6b281ZWRk" },
  // { icone: FaLinkedinIn, url: "https://linkedin.com/in/seuusuario" },
];

const FooterEspacial = () => {
  return (
    <footer className="footer-espacial">
      <div className="footer-content-container">
        {/* Área de Redes Sociais e Direitos Autorais */}
        <div className="footer-social-info">
          {/* Links para Redes Sociais */}
          <div className="footer-social-links">
            {REDES_SOCIAIS.map((rede, index) => (
              <a
                key={index}
                href={rede.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icone-link"
              >
                <rede.icone className="social-icone" size={24} />
              </a>
            ))}
          </div>

          <div className="footer-copy">
            {/* Direitos Autorais */}
            <p>
              &copy; {new Date().getFullYear()} Pro Blindagem | Todos os
              direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterEspacial;
