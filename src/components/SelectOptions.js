import React from "react";
import { Schedule } from "./Schedule";

const SelectOptions = ({ handelChange }) => {
  const options = Schedule.map((day, i) => {
    return <option key={day.id}>{day.day}</option>;
  });
  return (
    <select className="bn w1" onChange={handelChange}>
      {options}
    </select>
  );
};

export default SelectOptions;
