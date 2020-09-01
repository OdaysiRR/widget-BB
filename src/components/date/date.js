import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyDate = () => {
  let startDate = new Date();
  const [fecha, setChangeDate] = useState(startDate);

  const handleChange = (d) => {
    setChangeDate(d);
  };

  return (
    <div>
      <DatePicker className='picker' selected={fecha} onChange={handleChange}  value='Idag' />
    </div>
  );
};

export default MyDate;
