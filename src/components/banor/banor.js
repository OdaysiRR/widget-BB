import React, { useEffect } from "react";
import "../../views/home/home.scss";
import { useState } from "react";
import Rectangle from "../rectangle";
import ItemBanor from "./itemBanor";
//import laneAvailable from "../../useful/laneAvailable";
const Banor = (props) => {
  const { lanes,setScrollShow } = props;
  const [laneSelected, setLaneSelected] = useState(1);
  const [show, setModal] = useState(false);

 useEffect(() => {
  const init=lanes.filter(e=>e.available===true)
  const result=init&&init.length&&init[0].lane
  /*console.log(result)*/
setLaneSelected(result)
   
  }, [lanes]);

  const openModal = () => {
    setModal(true);
    setScrollShow(false)
  };
  const closeModal = () => {
    setModal(false);
    setScrollShow(true)
  };

  const handleChangeLane = (id) => {
    const result = lanes && lanes.length && lanes.find((e) => e.id === id).lane;
    setLaneSelected(result);
  };

  return !show ? (
    <Rectangle labelMain="Speltid" onClick={openModal}>
      {`${laneSelected} lane `}
      {}
    </Rectangle>
  ) : (
    <div className="ModalContainer" onClick={() => closeModal()}>
      <div
       
        style={{
          position:'relative',
          paddingRight:'27px',
          top: "150px",
          height:"379px",
          overflowY:'scroll'
        }}
      >
        <div className="row ml-0 mr-0 justify-content-end">
          {lanes.map((e, index) => (
            <ItemBanor
              key={e.id}
              id={e.id}
              label={e.lane}
              available={e.available}
              selected={laneSelected}
              onClick={handleChangeLane}
              closeModal={closeModal}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Banor;
