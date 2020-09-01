import React from "react";
import "../../views/home/home.scss";
import Header from "../header";
import Rectangle from "../../components/rectangle";
import Footer from "../footer";

import Reserve from "../../components/reserve/reserve";
import Hour from "../hour/hour";
import PriceChildrenParty from "../priceChildrenParty";
import AmountChildrenParty from "./amountEvery";

const childrens = {
  label: "Barn",
  labelDescription: "Till och med 13 år",
  amount: "8",
};

const opcional = {
  label: "Godispåse",
  amount: "8",
};

const ChildrenParty = (props) => {
  return (
    <div className="HomeContainer">
      <Header />
      <div className="BodyContainer row">
        <Reserve />
        <Rectangle labelMain="datum">Idag</Rectangle>
        <AmountChildrenParty data={childrens} main="Spelare" />
        <Hour />
        <Rectangle labelMain="packet">Korvfrossa</Rectangle>
        <AmountChildrenParty data={opcional} main="tillval" />
        <PriceChildrenParty price={1380}/>
      </div>
      <Footer history={props.history} />
    </div>
  );
};

export default ChildrenParty;
