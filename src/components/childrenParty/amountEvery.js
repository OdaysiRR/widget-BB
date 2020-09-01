import React from "react";
//import LabelMoreCount from "../myData/labelMoreCount";
import Contador from "../players/contador";
import { useState } from "react";
import "../../views/home/home.scss";
//import Rectangle from "../rectangle";

const mystyle = {
 /* height: "50px",*/
  cursor: "auto",
};

const AmountChildrenParty = (props) => {
  const {data,main}=props;
  const [myData, setChildrens] = useState(data);

  const addOne = () => {
    myData.amount++;
    setChildrens({ ...myData });
  };

  const subOne = () => {
    if (myData.amount > 0) {
      myData.amount--;
      setChildrens({ ...myData });
    }
  };

  return (
    <div className="Rectangle row ml-0 mr-0 position-relative " style={mystyle}>
      <div className="label-main fontlabel main">{main}</div>
      <div className=" label fontlabel" style={{ left: "140px",width:'211px' }}>
        <div className="row mr-0 ml-0 position-relative">
          <div
            style={{
              width: "85px",
              position: "relative",
            }}
          >
            {myData.label}
            <div className="label-description">
              {myData.labelDescription}
            </div>
          </div>
          <Contador addOne={addOne} subOne={subOne} amount={myData.amount} />
        </div>
      </div>
    </div>
  );
};

export default AmountChildrenParty;
