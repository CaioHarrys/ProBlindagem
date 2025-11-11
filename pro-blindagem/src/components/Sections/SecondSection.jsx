import React from "react";
import "../../assets/css/FirstSection.css";
import "../../assets/css/BodyContent.css";
import "../../assets/css/SecondSection.css";
import "../../App.css";
import SaibaCards from "../SaibaCards";
import Layers from "../../assets/imagens/Iphones/layers.png";

const SecondSection = () => {
  return (
    <section className="second-section">
      <div className="container">
        <div className="second-hero-content">
          <div className="hero-2-content">
            <div className="box-sec2">
              <h1 className="chivo-title-2">Como funciona?</h1>
              <p className="plus-jakarta-paragraph-alt">
                Nosso processo de blindagem invisível utiliza tecnologia de
                ponta em nanoquímica para criar uma camada protetora ultrafina
                sobre o vidro do seu celular. Aplicado por profissionais
                especializados, esse revestimento fortalece a superfície do
                vidro, aumentando sua resistência contra impactos e riscos sem
                comprometer a aparência ou a sensibilidade da tela.
              </p>
            </div>
          </div>
          <SaibaCards />
          <div className="phone-box-2">
            <img className="img-layer" src={Layers} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SecondSection;
