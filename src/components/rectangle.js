import React from "react";
import "../views/home/home.scss";

const Rectangle = (props) => {
  return (
    <div
      className="Rectangle row ml-0 mr-0 position-relative "
      style={props.style}
      onClick={() => props.onClick()}
    >
      <div className="label-main fontlabel main">{props.labelMain}</div>
      <div
        className=" label fontlabel"
        style={{
          color: `${props.colorfont}`,
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Rectangle;
