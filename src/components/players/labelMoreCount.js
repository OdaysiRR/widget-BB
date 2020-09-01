import React from "react";
import "../../views/home/home.scss";
import Contador from "./contador";
//import Contador from "./contador";
//import Labels from "./labels";

const LabelMoreCount = (props) => {
  const { id,addOne,subOne,amount,subTitle,title } = props;
  return (
    <div style={{ marginBottom: "19px" }}>
      <div className="row mr-0 ml-0 position-relative">
        <div
          style={{
            width: "85px",
          }}
        >
          {title}
          <div className="label-description">{subTitle}</div>
        </div>
        <Contador
          addOne={addOne}
          subOne={subOne}
          id={id}
          amount={amount}
        />
      </div>
    </div>
  );
};

export default LabelMoreCount;
