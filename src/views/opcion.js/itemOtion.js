import React from "react";
import Contador from "../../components/players/contador";

const ItemOption = (props) => {
  const { label, amount, unit, pos, price, addOne, subOne } = props;
  return (
    <div className="row ml-0 mr-0 item-option position-relative">
      <div
        style={{
          width: "205px",
          position: "absolute",
          left: "13px",
          top: "10px",
        }}
      >
        <div className="fontlabel">{label}</div>
        <div className="price-option">
          <div>
            {`${price} `}
            <span style={{ fontSize: "9px" }}>SEK</span>
            <span>/st</span>
          </div>
        </div>
      </div>
      <div className="fontlabel" style={{ marginTop: "10px" }}>
        {" "}
        <Contador addOne={addOne} subOne={subOne} amount={amount} pos={pos} />
      </div>
    </div>
  );
};

export default ItemOption;
