import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Exemplo de ícones, use sua biblioteca favorita
import '../assets/css/Footer.css';

// Defina seus links e informações em um objeto separado para melhor organização
const COLUNA_INFO = [
  {
    titulo: 'Explorar',
    links: [
      { nome: 'Missões', url: '/missoes' },
      { nome: 'Naves', url: '/naves' },
      { nome: 'Galáxia', url: '/galaxia' },
    ],
  },
  {
    titulo: 'Recursos',
    links: [
      { nome: 'Blog Cósmico', url: '/blog' },
      { nome: 'Documentação', url: '/docs' },
      { nome: 'FAQ Espacial', url: '/faq' },
    ],
  },
  {
    titulo: 'Sobre Nós',
    links: [
      { nome: 'A Empresa', url: '/sobre' },
      { nome: 'Carreiras', url: '/carreiras' },
      { nome: 'Contato (Telescópio)', url: '/contato' },
    ],
  },
];

const REDES_SOCIAIS = [
  { icone: FaTwitter, url: 'https://twitter.com/seuusuario' },
  { icone: FaInstagram, url: 'https://instagram.com/seuusuario' },
  { icone: FaLinkedinIn, url: 'https://linkedin.com/in/seuusuario' },
];

const FooterEspacial = () => {
  return (
    <footer className="footer-espacial">
      <div className="footer-content-container">
        
        {/* Colunas de Informação (3 Colunas) */}
        <div className="footer-colunas">
          {COLUNA_INFO.map((coluna) => (
            <div key={coluna.titulo} className="footer-coluna">
              <h3 className="coluna-titulo">{coluna.titulo}</h3>
              <ul className="coluna-lista">
                {coluna.links.map((link) => (
                  <li key={link.nome}>
                    <a href={link.url} className="coluna-link">
                      {link.nome}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Área de Redes Sociais e Direitos Autorais */}
        <div className="footer-social-info">
          
          {/* Links para Redes Sociais */}
          <div className="footer-social-links">
            {REDES_SOCIAIS.map((rede, index) => (
              <a key={index} href={rede.url} target="_blank" rel="noopener noreferrer" className="social-icone-link">
                <rede.icone className="social-icone" size={24} />
              </a>
            ))}
          </div>
          
          <div className="footer-copy">
            <p>&copy; {new Date().getFullYear()} Agência Espacial Gemini. Todos os direitos reservados. | Design Cósmico</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterEspacial;