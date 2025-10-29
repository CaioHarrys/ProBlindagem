import React from "react";
import "../../assets/css/FirstSection.css";
import IphonePro from "../../assets/imagens/celular-pro-blindagem.png";
import Wpp from "../../assets/icon/whatsapp.png";
import Diamante from "../../assets/icon/diamante.svg";
import Raio from "../../assets/icon/raio.svg";
import Quimica from "../../assets/icon/quimica.svg";
import Broken from "../../assets/imagens/Iphones/brokenNew.png";

const FirstSection = () => {
  const CardRow = [
    {
      id: 1,
      title: "Resistência",
      icon: Diamante,
      paragraph: "Camada invisível com alta resistência a impacto e riscos.",
    },
    {
      id: 2,
      title: "Nanoquímica",
      icon: Quimica,
      paragraph: "Processo aplicado por profissionais com secagem controlada.",
    },
    {
      id: 3,
      title: "Rápido",
      icon: Raio,
      paragraph:
        "Especialmente formulado para máxima adesão ao vidro do celular.",
    },
  ];
  return (
    <section className="first-section">
      <div className="container">
        <div className="hero-left">
          <div className="hero-left-content">
            <h1 className="Title">
              Blindagem invisivel para o seu{" "}
              <span className="span-color">celular</span>: Proteja seu
              dispositivo com estilo!
            </h1>
            <p>
              Camada nanoquímica que sela e fortalece seu vidro. Menos trincas,
              menos stress, mais vida útil.
            </p>
            <div className="Button-row">
              <button className="cssbuttons-io-button">
                Agendar via WhatsApp
                <div className="icon">
                  <img src={Wpp} alt="WhatsApp Icon" height="24" width="24" />
                </div>
              </button>
              <button className="button">Saiba Mais</button>
            </div>
            <div className="Card-Row">
              {CardRow.map((card) => (
                <div className="Card cards" key={card.id}>
                  <div className="bg">
                    <div className="Card-Title">
                      <img
                        className="IconCard"
                        src={card.icon}
                        alt={`icone de ${card.title.toLowerCase()}`}
                      />
                      <h2>{card.title}</h2>
                    </div>
                    <div className="Card-Paragraph">
                      <p>{card.paragraph}</p>
                    </div>
                  </div>
                  <div className={`blob blob-${card.id}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="phone-box">
            <img className="img-hero-right" src={Broken} alt="Iphone Pro" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default FirstSection;
