import React from "react";
import "../../views/home/home.scss";

const ItemTime = (props) => {
  const { id, label, selected, handleChangeTime, closeModal } = props;

  return (
    <div
      className={`${label === selected ? " Rectangle ItemSelected" : "Rectangle"}`}
      onClick={() => {
        handleChangeTime(id);
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

export default ItemTime;
