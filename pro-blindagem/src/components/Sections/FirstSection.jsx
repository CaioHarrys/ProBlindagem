import React from "react";
import "../../assets/css/FirstSection.css";
import IphonePro from "../../assets/imagens/celular-pro-blindagem.png";

const FirstSection = () => {
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
              <button className="btn-primary">Saiba Mais</button>
              <button className="btn-secondary">Contato</button>
            </div>
            <div className="Card-Row">
              <div className="Card">
                <div className="Card-Title">
                  <h2>+10K</h2>
                </div>
                <div className="Card-Paragraph"></div>
                <p>Clientes Satisfeitos</p>
              </div>
              <div className="Card">
                <div className="Card-Title">
                  <h2>+10K</h2>
                </div>
                <div className="Card-Paragraph"></div>
                <p>Clientes Satisfeitos</p>
              </div>
              <div className="Card">
                <div className="Card-Title">
                  <h2>+10K</h2>
                </div>
                <div className="Card-Paragraph"></div>
                <p>Clientes Satisfeitos</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img className="img-hero-right" src={IphonePro} alt="Iphone Pro" />
        </div>
      </div>
    </section>
  );
};
export default FirstSection;
