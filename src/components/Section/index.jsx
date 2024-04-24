import React from "react";
import "./style.css";
import drops from "../Section/card/index";
import CardList from "./CardList";


function Section() {
  return (
    <>
      <div className="body">
      <div  className="main2">
        <CardList drops={drops} />
      </div>


    </div>
    </>
  );
}

export default Section;
