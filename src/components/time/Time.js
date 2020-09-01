import React, { useEffect } from "react";
import "../../views/home/home.scss";
import { useState } from "react";
import Rectangle from "../rectangle";
import ItemTime from "./itemTime";

const Time = (props) => {
  const { setScrollShow, data } = props;
  const [timeSelected, setTimeSelected] = useState(null);
  const [show, setModal] = useState(false);

  useEffect(() => {
    setTimeSelected(data.playTime[0]);
  }, [data.playTime]);

  const openModal = () => {
    setModal(true);
    setScrollShow(false);
  };
  const closeModal = () => {
    setModal(false);
    setScrollShow(true);
  };

  const handleChangeTime = (id) => {
    let ob = data.playTime[id];
    setTimeSelected(ob);
  };

  return !show ? (
    <Rectangle labelMain="Speltid" onClick={openModal}>
      {timeSelected}
    </Rectangle>
  ) : (
    <div className="ModalContainer" onClick={() => closeModal()}>
      <div
        className="col"
        style={{
          top: "150px",
        }}
      >
        <div className="row ml-0 mr-0 justify-content-end">
          {data.playTime.map((item, index) => (
            <ItemTime
              key={index}
              id={index}
              label={item}
              selected={timeSelected}
              handleChangeTime={handleChangeTime}
              closeModal={closeModal}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Time;
