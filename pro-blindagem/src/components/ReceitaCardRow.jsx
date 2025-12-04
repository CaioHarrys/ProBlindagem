// ReceitaCardRow.jsx - Versão com componente reutilizável

import React from "react";
import "../assets/css/ReceitaCardRow.css";
import SparkleButton from "./SparkleButton";
import neon from "../assets/imagens/Iphones/com fundo/iphones1.jpg";
import watches from "../assets/imagens/Iphones/com fundo/watches3.jpg";
import watches2 from "../assets/imagens/Iphones/com fundo/pack.jpg";
import logo from "../assets/logo/LogoSemFundo.png";

const Card = ({ image, title, price, description }) => {
  const imageUrl = logo;
  return (
    <div className="receita-card">
      <div className="receita-content">
        <div className="receita-back">
          <div className="receita-back-content">
            <img
              src={image}
              alt={title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                borderRadius: "5px",
                filter: "blur(5px)",
                opacity: "0.19",
              }}
            />
            <img 
              src={imageUrl}
              alt="Logo"
              style={{
                width: "155px",
                height: "155px",
                position: "absolute",
                top: "27%",
                borderRadius: "5px",
                opacity: "0.8",
              }}
            />
            {/* <svg
              stroke="#ffffff"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              height="50px"
              width="50px"
              fill="#ffffff"
            >
              <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                id="SVGRepo_tracerCarrier"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M25 2C12.3 2 2 12.3 2 25s10.3 23 23 23 23-10.3 23-23S37.7 2 25 2zm0 43c-11.6 0-21-9.4-21-21S13.4 4 25 4s21 9.4 21 21-9.4 21-21 21zm-1-6.5c-.3 0-.6-.1-.8-.3-.4-.4-.4-1.1 0-1.5l1.6-1.6c.4-.4 1.1-.4 1.5 0 .4.4.4 1.1 0 1.5l-1.6 1.6c-.2.2-.5.3-.7.3zM32.8 33.2c-.3 0-.6-.1-.8-.3l-1.6-1.6c-.4-.4-.4-1.1 0-1.5s1.1-.4 1.5 0l1.6 1.6c.4.4.4 1.1 0 1.5-.2.2-.5.3-.7.3zm-6.6-8.2c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3zM25 15c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-8-12c-.3 0-.6-.1-.8-.3-.4-.4-.4-1.1 0-1.5l1.6-1.6c.4-.4 1.1-.4 1.5 0 .4.4.4 1.1 0 1.5l-1.6 1.6c-.2.2-.5.3-.7.3zM17.2 33.2c-.3 0-.6-.1-.8-.3-.4-.4-.4-1.1 0-1.5l1.6-1.6c.4-.4 1.1-.4 1.5 0 .4.4.4 1.1 0 1.5l-1.6 1.6c-.2.2-.5.3-.7.3z"></path>
              </g>
            </svg> */}
            <strong>Veja Mais</strong>
          </div>
        </div>
        <div className="receita-front">
          <div className="receita-img">
            <img
              src={image}
              alt={title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
          </div>
          <div className="receita-front-content">
            <div className="receita-description">
              <div className="receita-title">
                <p className="receita-title">
                  <strong>{title}</strong>
                </p>
              </div>
              {description && (
                <p className="receita-card-footer">{description}</p>
              )}
              <p className="pricetag">{price}</p>
              <SparkleButton children="Saiba Mais" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReceitaCardRow = () => {
  const cardsData = [
    {
      image: neon,
      title: "Blindagem para Celulares",
      price: "100$",
      description: "Proteção completa para seu celular, garantindo segurança e durabilidade.",
    },
    {
      image: watches,
      title: "Blindagem para Smartwatch",
      price: "200$",
      description: "Blindagem espesial para seus relogios inteligentes - Smartwatches",
    },
    {
      image: watches2,
      title: "Blindagem Máxima",
      price: "300$",
      description: "A mesma blindagem, agora apenas duas por uma!",
    },
    // Adicione mais cards conforme necessário
  ];

  return (
    <div className="receita-row">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default ReceitaCardRow;