import React from "react";
import "../../views/home/home.scss";

const ItemBanor = (props) => {
  const { id, label, selected, available, onClick, closeModal } = props;

  return (
    <div
      className={`${
        !available
          ? " Rectangle ItemDisable"
          : label === selected
          ? " Rectangle ItemSelected"
          : "Rectangle"
      }`}
      onClick={() => {
        available && onClick(id);
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

export default ItemBanor;
