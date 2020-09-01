import React from "react";
import "../../views/home/home.scss";

const ItemTable = (props) => {
  const { id, label, selected, onClick, closeModal } = props;
  return (
    <div
      className={`${id === selected ? " Rectangle ItemSelected" : "Rectangle"}`}
      onClick={() => {
        onClick(id);
        closeModal();
      }}
      style={{
        width: "234px",
      }}
    >
      <div className="fontlabel label">{label}</div>
    </div>
  );
};

export default ItemTable;