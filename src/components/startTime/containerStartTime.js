import React from "react";
import "../../views/home/home.scss";
import { useState, useEffect } from "react";
import fetchTimeSlots from "../../http/api";
import Rectangle from "../rectangle";
import ItemStartTime from "./itemStartTime";
import Enunciado from "./enunciado";
import ButtonTimeFree from "./btnStartTimeFree";
import ButtonTimeBusy from "./btnStartTimeAll";
import ItemBusy from "./itemBusy";

const time = [
  { id: 1, busy: false, time: "13:00", price: "300" },
  { id: 2, busy: false, time: "14:00", price: "300" },
  { id: 3, busy: false, time: "15:00", price: "300" },
  { id: 4, busy: false, time: "16:00", price: "300" },
  { id: 5, busy: true, time: "17:00", price: "300", label: "Fullbokat" },
  { id: 6, busy: true, time: "18:00", price: "300", label: "Endast drop-in" },
  { id: 7, busy: false, time: "19:00", price: "300" },
  { id: 8, busy: false, time: "20:00", price: "300" },
];

const mystyle = {
  background: "rgba(255,255,255,0.75) 0% 0% no-repeat padding-box",
  boxShadow: "0px 0px 0px",
};

const StartTime = (props) => {
  /*const [time, setTimes] = useState();*/

  const timeSlotsParams = {
    date:2020-9-1,
    duration: 30,
    lanes: 2,
    players: [
      { amount: 5, customGroupId: 646 },
      { amount: 3, customGroupId: 647 }
    ],
  };
  
  const { data } = props;

  /*useEffect(() => {
    fetchTimeSlots(timeSlotsParams).then((res) => {
      console.log(res.data);
    });
  }, [data]);*/

  const [showFree, setModalFree] = useState(false);
  const [showAll, setModalAll] = useState(false);
  const timeFree = time.filter((item) => !item.busy);
  const [timeBusy, setTimeBusy] = useState(timeFree[0].id);
  const idSelected = timeBusy;

  const handleOnClick = () => {
    setModalFree(true);
  };
  const handleChangeTimeBusy = (id) => {
    setTimeBusy(id);
    setModalFree(false);
    setModalAll(false);
  };
  const handleOnClickTimeFree = () => {
    setModalFree(false);
    setModalAll(true);
  };
  const handleOnClickTimeBusy = () => {
    setModalFree(true);
    setModalAll(false);
  };

  return !showFree && !showAll ? (
    <Rectangle
      onClick={handleOnClick}
      labelMain="Starttid"
      style={mystyle}
      colorfont="#0090FF"
    >
      Välj ledig tid
    </Rectangle>
  ) : (
    <div className="ModalContainer">
      <div
        className="row flex-column mr-0 ml-0"
        style={{
          position: "relative",
          top: "116px",
          alignItems: "center",
        }}
      >
        <Enunciado labelMain={"Starttid"} />

        {time.map((item) =>
          (showFree || showAll) && !item.busy ? (
            <ItemStartTime
              key={item.id}
              time={item.time}
              price={item.price}
              id={item.id}
              idSelected={idSelected}
              onClick={handleChangeTimeBusy}
            />
          ) : showAll && item.busy ? (
            <ItemBusy time={item.time} label={item.label} />
          ) : null
        )}

        {!showAll ? (
          <ButtonTimeFree onClick={handleOnClickTimeFree} />
        ) : (
          <ButtonTimeBusy onClick={handleOnClickTimeBusy} />
        )}
      </div>
    </div>
  );
};
export default StartTime;
