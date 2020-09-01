import React from "react";
import "./home.scss";
import { useState } from "react";
//import { useStoreon } from "storeon/react";
import Bowling from "../../components/bowling/bowling";
import { useEffect } from "react";
import { fetchWidget, fetchTimeSlots } from "../../http/api";

const INITIAL_WIDGET = {
  id: null,
  bowlingcenterId: null,
  language: "en",
  bookingStyle: "book-by-minute",
  dateFormat: "MM.DD.YYYY",
  timeFormat: "hh:mm A",
  timeZone: "Europe/Stockholm",
  apiToken: null,
  bowlingcenter: {
    id: null,
    name: "",
    lanes: 1,
  },
  playTime: [],
  customerGroups: [{ amount: 2 }],
  maxAmountPlayerPerLane: 1,
  bookableTypes: [],
};
const initialState = { label: "Bowling", id: "bowling" };

const Home = (props) => {
  const [widget, setWidget] = useState(INITIAL_WIDGET);
  const [typeReserve, setTypeReserve] = useState(initialState);
  const [scrollShow, setScrollShow] = useState(true);

  const id = 283;

  useEffect(() => {
    fetchWidget(id).then((res) => {
      /* console.log(res.data);*/
      const result = { ...widget };
      result.bowlingcenter = res.data.bowlingcenter;
      result.playTime = res.data.playTime;
      result.customerGroups = res.data.customerGroups;
      result.maxAmountPlayerPerLane = res.data.maxAmountPlayerPerLane;
      setWidget(result);
    });
  }, []);

  const { history } = props;

  return (
    <div
      className={scrollShow ? "HomeContainer" : "HomeContainer scroll-hidden"}
    >
      <Bowling
        history={history}
        typeReserve={typeReserve}
        setTypeReserve={setTypeReserve}
        setScrollShow={setScrollShow}
        data={widget}
      />
    </div>
  );
};

export default Home;
