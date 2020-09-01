import React from "react";
import { useState } from "react";
import Rectangle from "../../components/rectangle";
import Enunciado from "../startTime/enunciado";
import ItemStartTime from "../startTime/itemStartTime";

const hour = [
  { id: "1", time: "13:00 – 15:00", price: "1200" },
  { id: "2", time: "14:00 – 16:00", price: "1200" },
  { id: "3", time: "15:00 – 17:00", price: "1200" },
];

const Hour = () => {
  const [show, setModal] = useState(false);
  const initialState = { id: "1", time: "13:00 – 15:00", price: "1200" };
  const [hourSelected, sethourSelected] = useState(initialState);

  const openModal = () => {
    setModal(true);
  };

  const handleChangeHour = (id) => {
    let selected = hour.find((element) => element.id === id);
    sethourSelected(selected);
    setModal(false);
  };
  return !show ? (
    <Rectangle
      onClick={openModal}
      labelMain="TID"
      /*style={mystyle}*/
    >
      {hourSelected.time}
    </Rectangle>
  ) : (
    <div className="ModalContainer">
      <div
        className="row flex-column mr-0 ml-0"
        style={{
          position: "relative",
          top: "150px",
          alignItems: "center",
        }}
      >
        <Enunciado labelMain={"TID"} />

        {hour.map((item) => (
          <ItemStartTime
            key={item.id}
            time={item.time}
            price={item.price}
            id={item.id}
            idSelected={hourSelected.id}
            onClick={handleChangeHour}
          />
        ))}
      </div>
    </div>
  );
};
export default Hour;
