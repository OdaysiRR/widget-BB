import React from "react";
import "../../views/home/home.scss";

const ItemStartTime = (props) => {
  const { id, time, price, idSelected, onClick } = props;

  return (
    <div>
      <div
        className={`${
          id === idSelected
            ? " Rectangle row mr-0 ml-0 ItemSelected "
            : "Rectangle row mr-0 ml-0"
        }`}
        onClick={() => onClick(id)}
        style={{
          width: "310px",
        }}
      >
        <div
          className={`${
            id === idSelected
              ? " label fontlabel fontWhite"
              : "label fontlabel fontBlue"
          }`}
          style={{
            left: "12px",
          }}
        >
          {time}
        </div>
        <div className="fontlabel numberprice" style={{ left: "235px",top:'10px' }}>
          {price}
        </div>
        <div className="sektest" style={{ top: "15px", left: "275px" }}>
          SEK
        </div>
      </div>
    </div>
  );
};

export default ItemStartTime;
