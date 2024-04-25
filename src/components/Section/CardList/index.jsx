import React from "react";
import CardCom from "../card details";

function CardList({ drops, addCardToBuyList }) {
  return (
    <>
      <div style={{ display: "flex", gap: "2rem", padding: "0 2rem" }}>
        {drops.map((item, index) => {
          return (
            <CardCom
              cardData={item}
              key={index}
              addCardToBuyList={addCardToBuyList}
            />
          );
        })}
      </div>
    </>
  );
}

export default CardList;
