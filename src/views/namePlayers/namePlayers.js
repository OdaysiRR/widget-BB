import React from "react";
import "./namePlayers.css";
//import ItemName from "./itemName";
import Bana from "./banas";
//import Back from "../../components/back";
const banas = [{ bana: 1, totalPlayers:5 },{ bana: 2, totalPlayers:3}];

const Name = () => {
  return (
    <div className="NameContainer">
      <div className="row ml-0 mr-0">
        <div className=" col">
          <div style={{width:'351px', height:'60px',position:"relative"}}>
            <div className="enunciadoName">Fyll i spelarnamnen</div>
          </div>
          {banas.map(item=>{
            return(<Bana bana={item.bana} totalPlayers={item.totalPlayers}/>)
          })}
        </div>
      </div>
    </div>
  );
};
export default Name;
