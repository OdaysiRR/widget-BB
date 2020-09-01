import React from "react";
import "../views/home/home.scss";
import transformPrice from "../useful/transformPrice";

const Price = (props) => {
  const { price } = props;
  return (
    <div className="container-price row mr-0 ml-0 position-relative">
      <div className="fontlabel main label-main">pris</div>

      <div className="fontlabel">
        <div
          style={{
            lineHeight: "15px",
            position: "absolute",
            top: "10px",
            right: "144px",
            height: "21px",
          }}
        >
          {`${transformPrice(price)} `}
          <span className="sektest" style={{ height: "100%" }}>
            sek
          </span>
        </div>
      </div>
    </div>
  );
};

export default Price;
