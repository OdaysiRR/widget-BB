import React from "react";
import { useState } from "react";

const Bana = (props) => {
  const { totalPlayers, bana } = props;

  const [namePlayers, setNames] = useState([]);

  const disminuirTotalPlayers = (totalPlayers) => {
    const result = [];
    for (let index = 0; index < totalPlayers; index++) {
      result.push(
        <input
          className="itemName"
          placeholder={`Spelare ${index + 1}`}
          name={`${index}`}
          onChange={handleChangeInput}
        />
      );
    }
    return result;
  };

  const handleChangeInput = (event) => {
    console.log(event.target.name);
    namePlayers[event.target.name] = event.target.value;
    setNames([...namePlayers]);
  };
  return (
    <div>
      <div style={{ height: "40px", position: "relative" }}>
        <div
          className="enunciadoBana"
          style={{ position: "absolute", top: "12px", left: "13px" }}
        >
          Bana{bana}
        </div>
      </div>
      <div>{disminuirTotalPlayers(totalPlayers)}</div>
    </div>
  );
};
export default Bana;
