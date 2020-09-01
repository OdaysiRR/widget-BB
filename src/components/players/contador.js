import React from "react";
import "../../views/home/home.scss";
//import useState from 'react'

const Contador = (props) => {
  const { amount, id,subOne,addOne } = props;

  return (
    <div style={{ position: "absolute", right: "32px" }}>
      <div
        className="row mr-0 ml-0 justify-content-between"
        style={{ width: "78px" }}
      >
        <div
          className={`${
            amount === 0 ? "counter minus gray" : "counter minus red"
          }`}
          onClick={() => subOne(id)}
        ></div>

        <div
          style={{
            minWidth: "10px",
            textAlign: "center",
          }}
        >
          {amount}
        </div>
        <div className="counter plus" onClick={() => addOne(id)}></div>
      </div>
    </div>
  );
};

export default Contador;
