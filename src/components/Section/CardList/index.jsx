import React from "react";
import Details from "../card details";

function CardList({ drops }) {
  return (
    <>
    <div className="main22">
      {drops.map((item) => {
        return <Details {...item} />;
      })}
      </div>
    </>
  );
}

export default CardList;
