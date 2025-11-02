import React, { useState } from "react"; // Adicionei useState
import "../assets/css/SaibaCards.css";
import NumberOne from "../assets/icon/numero-1.png";
import NumberTwo from "../assets/icon/numero-2.png";
import NumberThree from "../assets/icon/numero-3.png";
import NumberFour from "../assets/icon/numero-4.png";

const SaibaCards = () => {
  const [expandedCards, setExpandedCards] = useState(new Array(4).fill(false)); // Estado inicial: todos fechados (4 cards)

  const toggleCard = (index) => {
    setExpandedCards((prev) =>
      prev.map((expanded, i) => (i === index ? !expanded : expanded))
    );
  };

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
      {cards.map((card, index) => (
        <div
          className={`card ${expandedCards[index] ? "expanded" : ""}`} // Adiciona classe 'expanded' se ativo
          key={card.id}
          onClick={() => toggleCard(index)} // Clique pra toggle
          role="button" // Acessibilidade: indica que é clicável
          tabIndex={0} // Permite navegação por teclado
          onKeyDown={(e) => e.key === "Enter" && toggleCard(index)} // Suporte a teclado
        >
          <div className="align">
            <img
              className="card-icon"
              src={card.icon}
              alt={`Ícone do passo ${card.id}`}
            />
          </div>
          <h1>
            {card.title}{" "}
            <span className="toggle-icon">
              {expandedCards[index] ? "−" : "+"} {/* Ícone simples pra indicar estado */}
            </span>
          </h1>
          <p className="description">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SaibaCards;