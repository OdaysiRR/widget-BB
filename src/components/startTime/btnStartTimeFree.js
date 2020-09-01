import React from 'react'
const ButtonTimeFree=(props)=>{
    return(<div
        className="btn-Time"
        style={{ width: "145px" }}
        onClick={() => props.onClick()}
      >
        <div
          className="fontlabel"
          style={{ color: "#FFFFFF", textAlign: "center", cursor: "pointer" }}
        >
          Visa alla tider
        </div>
      </div>)
}
export default ButtonTimeFree;