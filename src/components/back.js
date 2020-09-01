import React from "react";

const Back = () => {
  return (
    <div className=" row mr-0 ml-0 ">
      <div>
        <div className=" row mr-0 ml-0 ">
          <div /*style={{width:'15px',height:'18.2px'}}*/>
            <span className=" fa fa-lg fa-chevron-left" aria-hidden="true"></span>
          </div>
          <div className="omit" style={{ width: "67px", textAlign: "left" }}>
            Tillbaka
          </div>
        </div>
      </div>
      <div className="omit">Hoppa över</div>
    </div>
  );
};
export default Back;
