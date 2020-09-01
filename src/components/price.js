import React from "react";
import "../views/home/home.scss";

const PriceBowling = (props) => {
  return (
    <div className="container-price row mr-0 ml-0 position-relative">
      <div className="fontlabel main label-main">Pris</div>
      
      <div
        className="fontlabel"
        style={{lineHeight:'15px',textAlign:'center',position:'absolute',top:'10px',right:'154px',height:'21px'}}
      >
        -<span className='sektest' style={{textAlign:'right'}}>sek</span>
      </div>
     
    </div>
  );
};

export default PriceBowling;
