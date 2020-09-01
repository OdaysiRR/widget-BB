import React from "react";
import "../../views/home/home.scss";

const ItemReserve = (props) => {
  const { id, label, onClick, selected, closeModal } = props;
  return (
    <div
      className={`${
        id === selected.id ? "Rectangle ItemSelected reserve" : "Rectangle"
      }`}
      onClick={() => {
        onClick(id);
        closeModal();
      }}
      style={{
        width: "219px",
      }}
    >
      <div className="fontlabel label">{label}</div>
    </div>
  );
};

export default ItemReserve;
