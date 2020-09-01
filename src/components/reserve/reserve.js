import React from "react";
import "../../views/home/home.scss";
import { useState } from "react";
import { useStoreon } from "storeon/react";
import Rectangle from "../rectangle";
import ItemReserve from "./itemReserve";
import { CHANGE_RESERVE } from "../../store/projects";

const styleBlue = {
  background: "#4058BE 0% 0% no-repeat padding-box",
  color: "#FFFFFF ",
  /*cursor: "pointer",*/
};
const reserve = [
  {
    label: "Bowling",
    id: "bowling",
  },
  {
    label: "Barnkalas",
    id: "barnkalas",
  },
  {
    label: "Shuffle Board",
    id: "shuffle",
  },
  {
    label: "Biljard",
    id: "biljard",
  },
];

const Reserve = (props) => {
 const {typeReserve, setTypeReserve}=props
  const [show, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
    props.setScrollShow(false)
    
  };
  const closeModal = () => {
    setModal(false);
    props.setScrollShow(true)
  };

  const handleChangeReserve = (id) => {
    let selected = reserve.find((element) => element.id === id);
    props.setTypeReserve(selected)
  };

  return !show ? (
    <Rectangle onClick={openModal} labelMain="boka" style={styleBlue}>
      {typeReserve.label}
    </Rectangle>
  ) : (
    <div className="ModalContainer row" onClick={() => closeModal()}>
      <div
        
        style={{
          position:'relative',
          paddingRight:'27px',
          top: "150px",
        }}
      >
        <div className="row ml-0 mr-0 justify-content-end">
          {reserve.map((item) => (
            <ItemReserve
              key={item.id}
              id={item.id}
              label={item.label}
              onClick={handleChangeReserve}
              selected={typeReserve}
              closeModal={closeModal}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Reserve;
