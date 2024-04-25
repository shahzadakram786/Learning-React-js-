import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import drops from "../Section/card/index";
import CardList from "./CardList";
import BuyCards from "./CardList/Buycards";

let buyCard = [];

function Section() {
  const addCardToBuyList = (cardData) => {
    buyCard.push(cardData);
    renderBuyCards();
  };

  const renderBuyCards = () => {
    const buyCardsContainer = document.querySelector(".list-buy-cards");
    buyCardsContainer.innerHTML = "";
    const root = ReactDOM.createRoot(buyCardsContainer);
    root.render(<BuyCards buyCard={buyCard} />);
  };

  return (
    <>
      <div className="body">
        <div className="main2">
          <CardList drops={drops} addCardToBuyList={addCardToBuyList} />
        </div>
        <div className="buy-cards">
          <div>
            <h1 style={{ textAlign: "center" }}>Buy Cards</h1>
          </div>
          <div className="list-buy-cards"></div>
        </div>
      </div>
    </>
  );
}

export default Section;
