import React from "react";
import "../views/home/home.scss";

const Footer = (props) => {
  const handleOnClick = () => {
    console.log(props);
    props.history.push("/name");
  };
  return (
    <div className="Footer" onClick={handleOnClick}>
      <div>
        <div className="btn-continue">
          <label className="font-btnContinue">Fortsätt</label>
        </div>
        <div style={{ width: "226px", height: "55px", marginLeft: "11px" }}>
          Logotipo
        </div>
      </div>
    </div>
  );
};

export default Footer;
