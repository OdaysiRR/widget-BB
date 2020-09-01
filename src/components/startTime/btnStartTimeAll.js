import React from "react";
const ButtonTimeBusy = (props) => {
  return (
    <div className="btn-Time row justify-content-center mr-0 ml-0" onClick={()=>props.onClick()}>
      <div
        className="fontlabel"
        style={{ color: "#FFFFFF", textAlign: "center", cursor: "pointer" }}
      >
        Visa endast bokningsbara tider
      </div>
    </div>
  );
};
export default ButtonTimeBusy;
