import React from "react";
import "../assets/css/SaibaCards.css";
import NumberOne from "../assets/icon/numero-1.png";
import NumberTwo from "../assets/icon/numero-2.png";
import NumberThree from "../assets/icon/numero-3.png";
import NumberFour from "../assets/icon/numero-4.png";

const SaibaCards = () => {
  const cards = [
    {
      id: 1,
      icon: NumberOne,
      title: "Limpeza",
      description:
        "O vidro do celular é cuidadosamente limpo para remover qualquer sujeira ou oleosidade.",
    },
    {
      id: 2,
      icon: NumberTwo,
      title: "Aplicação de Nanoquímica",
      description: "O composto nanoquímico é aplicado uniformemente na tela.",
    },
    {
      id: 3,
      icon: NumberThree,
      title: "Ativação UV",
      description:
        "Aquecido por luz UV, solidifica nos poros, criando a blindagem invisível.",
    },
    {
      id: 4,
      icon: NumberFour,
      title: "Proteção Total",
      description:
        "Seu dispositivo está pronto, com vida útil estendida e estilo preservado.",
    },
  ];

  return (
    <div className="container Saiba-mais-cards-container">
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <div className="align">
            <img
              className="card-icon"
              src={card.icon}
              alt={`Icone do passo ${card.id}`}
            />
          </div>

          <h1>{card.title}</h1>
          <p className="description">{card.description}</p> {/* Adicionei className para controle extra */}
        </div>
      ))}
    </div>
  );
};

export default SaibaCards;