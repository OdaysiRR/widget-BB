import React from "react";
import "../../views/home/home.scss";

const ItemBusy = (props) => {
  const { label, time } = props;

  return (
    <div>
      <div className="ItemBusy row mr-0 ml-0 justify-content-between position-relative">
        <div
          className="fontlabel label"
          style={{
            left:'12px',
            textTransform: "uppercase",
          }}
        >
          {time}
        </div>
        <div
          className="typebusy"
          style={{
            position: "absolute",
            right: "8px",
            top: "15px",
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
};

export default ItemBusy;
