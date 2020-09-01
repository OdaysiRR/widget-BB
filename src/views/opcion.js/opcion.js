import React from "react";
import "../home/home.scss";
import ItemOption from "./itemOtion";
import { useState } from "react";
import Price from './price'

const initialOptions = [
  { id: 1, label: "Godispåse", price: 15, unit: "SEK/st", amount: 8 },
  { id: 2, label: "Slush Puppies", price: 10, unit: "SEK/st", amount: 0 },
  {
    id: 3,
    label: "Princesstårta för 8 barn",
    price: 160,
    unit: "SEK/st",
    amount: 0,
  },
  { id: 4, label: "Bowling T-Shirt", price: 100, unit: "SEK/st", amount: 0 },
];

const Tillval = () => {
  const [options, setOptions] = useState(initialOptions);

  const total = options.reduce(
    (accumulator, item) => accumulator + item.amount * item.price,
    0
  );

  const addOne = (id) => {
    options.find((elem) => elem.id === id).amount++;
    setOptions([...options]);
  };

  const subOne = (id) => {
    if (options.find((elem) => elem.id === id).amount > 0) {
      options.find((elem) => elem.id === id).amount--;
      setOptions([...options]);
    }
  };

  return (
    <div className="HomeContainer">
      {console.log(total)}
      <div className="row ml-0 mr-0">
        <div className=" col">
          <div style={{ width: "351px", height: "60px", position: "relative" }}>
            <div className="enunciado-options">Tillval</div>
          </div>
          {options.map((item) => (
            <ItemOption
              key={item.id}
              label={item.label}
              price={item.price}
              amount={item.amount}
              subOne={subOne}
              addOne={addOne}
              pos={item.id}
            />
          ))}
          <Price total={total}/>
        </div>
      </div>
    </div>
  );
};
export default Tillval;
