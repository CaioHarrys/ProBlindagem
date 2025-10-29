import React from "react";
import "../../assets/css/FirstSection.css";
import "../../assets/css/BodyContent.css";
import "../../assets/css/SecondSection.css";
import SaibaCards from "../SaibaCards";
import Layers from "../../assets/imagens/Iphones/layers.png";

const SecondSection = () => {
  return (
    <section className="second-section">
      <div className="container">
        <div className="second-hero-content">
          <div className="hero-2-content">
            <h1 className="Title">Como funciona?</h1>
            <p className="paragraph-second-section">
              Nosso processo de blindagem invisível utiliza tecnologia de ponta
              em nanoquímica para criar uma camada protetora ultrafina sobre o
              vidro do seu celular. Aplicado por profissionais especializados,
              esse revestimento fortalece a superfície do vidro, aumentando sua
              resistência contra impactos e riscos sem comprometer a aparência
              ou a sensibilidade da tela.
            </p>
          </div>
          <SaibaCards />
          <img className="img-layer" src={Layers} alt="" />
        </div>
      </div>
    </section>
  );
};
export default SecondSection;
