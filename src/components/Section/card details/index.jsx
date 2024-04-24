import React from "react";
import { VscVerifiedFilled } from "react-icons/vsc";

function Card_Structure({
  title,
  image,
  des1,
  price1,
  curr1,
  des2,
  price2,
  curr2,
  verified,
}) {
  return (
    <div className="card">
      <div className="img_parent">
        <img src={image} alt="shoes" />
      </div>
      <div className="text_parent">
        <h2>
          {title}
          {verified ? <VscVerifiedFilled className="verified" /> : ""}
        </h2>
        <div className="text_child">
          <div>
            <h3>{des1}</h3>
            <h2>
              {price1}
              <span>{curr1}</span>
            </h2>
          </div>

          <div>
            <h3>{des2}</h3>
            <h2>
              {price2}
              <span>{curr2}</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card_Structure;
