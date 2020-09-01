import React from "react";
const Enunciado = (props) => (
  <div
    className="enunciado row mr-0 ml-0 justify-content-between"
   
  >
    <div style={{ width: "102px" }}>{props.labelMain}</div>
    <div style={{ width: "40px", textAlign: "right" }}>Pris</div>
  </div>
);
export default Enunciado;
