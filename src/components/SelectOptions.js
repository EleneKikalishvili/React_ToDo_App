import React from "react";
import { Schedule } from "./Schedule";

const SelectOptions = () => {
  const options = Schedule.map((day, i) => {
    return <option key={day.id}>{day.day}</option>;
  });
  return <select>{options}</select>;
};

export default SelectOptions;
