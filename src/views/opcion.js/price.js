import React from "react";
import "../home/home.scss";
import transformPrice from '../../useful/transformPrice'

const Price = (props) => {
    const {total}=props
  return (
    <div className="container-price row mr-0 ml-0 position-relative">
      <div className="fontlabel main label-main">Summa tillval</div>

      <div
        className="fontlabel"
        style={{lineHeight:'15px',textAlign:'center',position:'absolute',top:'10px',right:'43px',height:'21px'}}
      >
        {`${transformPrice(total)} `}<span className='sektest' style={{textAlign:'center'}}>sek</span>
      </div>
    </div>
  );
};

export default Price;
