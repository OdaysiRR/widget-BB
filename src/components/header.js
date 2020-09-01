import React, { useEffect } from "react";
import "../views/home/home.scss";
import { useStoreon } from "storeon/react";

const Header = (props) => {
  const { data } = props;

  return (
    <div className=" header row mr-0 ml-0 justify-content-center">
      <div className="textHeader">{data.bowlingcenter.name}</div>
    </div>
  );
};

export default Header;
