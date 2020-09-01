import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import "../../views/home/home.scss";
import Header from "../header";
import Rectangle from "../../components/rectangle";
import Footer from "../footer";
import Players from "../../components/players/players";
import Time from "../../components/time/Time";
import Banor from "../../components/banor/banor";
//import Options from "../../components/options/options";
import StartTime from "../../components/startTime/containerStartTime";
import Reserve from "../../components/reserve/reserve";
import PriceBowling from "../price";
import AmountChildrenParty from "../childrenParty/amountEvery";
import laneAvailable from "../../useful/laneAvailable";

const initPlayers = [
  { amount: 0, id: 1 },
  { amount: 0, id: 2 },
  { amount: 1, id: 3 },
];

const opcional = {
  label: "Skohyra",
  amount: 0,
};
const styleRectanglePlayer = {
  height: "130px",
  cursor: "auto",
};

const Bowling = (props) => {
  const { data } = props;
  const [lanes, setLane] = useState([]);
  const [players, setPlayers] = useState(initPlayers);

  useEffect(() => {
    const result1 = data.customerGroups.map((e) => {
      return { ...e, amount: 0 };
    });
    setPlayers(result1);
  }, [data]);

  useEffect(() => {
    const result = [];
    const totalPlayers = players.reduce(
      (accumulator, currentValue) => accumulator + currentValue.amount,
      0
    );
    for (let index = 0; index < data.bowlingcenter.lanes; index++) {
      let available = laneAvailable(
        totalPlayers,
        data.maxAmountPlayerPerLane,
        data.bowlingcenter.lanes,
        index + 1
      );
      result.push({
        id: index + 1,
        lane: index + 1,
        available: available,
      });
    }
    setLane(result);
  }, [data, players]);

  const addOne = (id) => {
    const result = players.map((e) => {
      if (e.id === id) e.amount++;
      return e;
    });
    setPlayers(result);
  };

  const subOne = (id) => {
    const result = players.map((e) => {
      if ((e.id === id) & (e.amount > 0)) e.amount--;
      return e;
    });
    setPlayers(result);
  };

  return (
    <div className="container-scroll">
      <Header data={data} />
      <div className="BodyContainer row">
        <div style={{ width: "100%", padding: "0 27px 0 12px" }}>
          <Reserve
            setTypeReserve={props.setTypeReserve}
            typeReserve={props.typeReserve}
            setScrollShow={props.setScrollShow}
          />
          <Rectangle labelMain="datum">Idag</Rectangle>
          <Time setScrollShow={props.setScrollShow} data={data} />
          <Players
            players={players}
            addOne={addOne}
            subOne={subOne}
            mystyle={styleRectanglePlayer}
          />
          <AmountChildrenParty data={opcional} main="Tillval" />
          <Banor
            lanes={lanes} 
            setScrollShow={props.setScrollShow}
          />
          <StartTime data={data}/>
          <PriceBowling />
        </div>
      </div>
      <Footer history={props.history} />
    </div>
  );
};

export default Bowling;
