import React from "react";
import "../../views/home/home.scss";
import { useState } from "react";
import Rectangle from "../rectangle";
import ItemTable from "./itemTable";


const table = [
    {
      label: "1",
      id: "1",
    },
    {
      label: "2",
      id: "2",
    },
    {
      label: "3",
      id: "3",
    },
    {
      label: "4",
      id: "4",
    },
    {
      label: "5",
      id: "5",
    },
    {
      label: "6",
      id: "6",
    },
    {
      label: "7",
      id: "7",
    },
    {
      label: "8",
      id: "8",
    },
  ];
  
  const Table = () => {
    const [show, setModal] = useState(false);
    const [tableSelected, changeTable] = useState("1");
  
    const openModal = () => {
      setModal(true);
    };
    const closeModal = () => {
      setModal(false);
    };
  
    const handleChangeTable = (id) => {
      let ob = table.find((element) => element.id === id);
      changeTable(ob.label)
    };
  
    return !show ? (
      <Rectangle
        labelMain="Bord"
        onClick={openModal}
      >{`${tableSelected} bord`}</Rectangle>
    ) : (
      <div className="ModalContainer" onClick={() => closeModal()}>
        <div
          className="col"
          style={{
            top: "116px",
          }}
        >
          <div className="row ml-0 mr-0 justify-content-end">
            {table.map((item) => (
              <ItemTable
                key={item.id}
                id={item.id}
                label={item.label}
                selected={tableSelected}
                onClick={handleChangeTable}
                closeModal={closeModal}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  export default Table;