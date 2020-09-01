import React from "react";
import "../../views/home/home.scss";
//import Contador from "./contador";
import { useState, useEffect } from "react";
//import Rectangle from "../home/rectangle";
import LabelMoreCount from "./labelMoreCount";

const Players = (props) => {
  const { players, addOne, subOne, mystyle } = props;

  return (
    <div className="Rectangle row ml-0 mr-0 position-relative " style={mystyle}>
      <div className="label-main fontlabel main">Spelare</div>
      <div
        className=" fontlabel"
        style={{
          width: "211px",
          position: "absolute",
          left: "140px",
          top: "10px",
        }}
      >
        <div className="row ml-0 mr-0 flex-column">
          {players.map((ob) => (
            <LabelMoreCount
              addOne={addOne}
              subOne={subOne}
              key={ob.id}
              id={ob.id}
              title={ob.title}
              subTitle={ob.subTitle}
              amount={ob.amount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Players;
