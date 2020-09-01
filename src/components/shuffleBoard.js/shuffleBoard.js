import React  from "react";
import "../../views/home/home.scss";
import Header from "../header";
import Footer from "../footer";
import Reserve from "../../components/reserve/reserve";
import Rectangle from '../rectangle'
import Time from '../time/Time'
import Table from "../table/table";
import StartTime from "../startTime/containerStartTime";
import PriceBowling from "../price";

const ShuffleBoard = (props) => {
    return (
      <div className="HomeContainer">
        <Header />
        <div className="BodyContainer row">
          <Reserve />
          <Rectangle labelMain="datum">Idag</Rectangle>
          <Time />
          <Table/>
          <StartTime/>
          <PriceBowling/>
        </div>
        <Footer history={props.history} />
      </div>
    );
 
};

export default ShuffleBoard;
