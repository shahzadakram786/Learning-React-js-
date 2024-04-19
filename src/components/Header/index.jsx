import React from "react";
import "./style.css";
import { PiDotsNineBold } from "react-icons/pi";
// import img1 from "../Header/imges/dp-transformed.png"
function Header() {
  return (
    <div className="main_div">
      <a href="#Gmail">Gmail</a>
      <a href="#Images">Images</a>
      <PiDotsNineBold className="icons_dots" />
      <div className="circle_img">
        {/* <img
          // src={img1}
          alt=""
        /> */}
      </div>
    </div>
  );
}

export default Header;
