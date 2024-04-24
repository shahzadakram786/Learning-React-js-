import React from "react";
import Details from "../card details";
import { BsDisplay } from "react-icons/bs";

function CardList({ drops }) {
  return (
    <>
    <div style={{display:"flex", gap:"2rem" , padding : "0 2rem"}}>
      {drops.map((item) => {
        return <Details {...item} />;
      })}
      </div>
    </>
  );
}

export default CardList;
