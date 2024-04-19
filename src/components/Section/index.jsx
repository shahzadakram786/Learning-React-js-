import React from "react";
import './style.css'
import  Google from './images/pngimg.com - google_PNG19637.png'
import search from './images/svgexport-3.png'
import lense from './images/lense.png'
import mic from './images/mic.png'
import { BsYoutube } from "react-icons/bs";

function Section() {
  return (
    <div className="section">
        <img src={Google} alt="" />
        <div className="parent_input">
           <a className="search" href="#search"><img src={search} alt="" /></a>
           <input type="text" />
           <a className="mic" href="#mic"><img src={mic} alt="" /></a>
           <a className="lense" href="#lense"><img src={lense} alt="" /></a>
  
        </div>

        <div className="below_parent">
           <button>Google Search</button>
           <button>I'm Feeling Lucky </button>
        </div>

        <div className="below_below">
         <p>Google offered in: </p>

         <div>
         <a href="#urdu">اردو</a>
         <a href="#urdu">پښتو </a>
         <a href="#urdu"> سنڌي</a>

        </div>

        </div>
       

    </div>
  ) 
}

export default Section;
