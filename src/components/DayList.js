import React from "react";
import { Schedule } from "./Schedule";
import WeekDay from "./WeekDAy";

const DayList = () => {
  const daysArray = Schedule.map((ob, i) => {
    return (
      <WeekDay
        id={Schedule[i].id}
        todo={Schedule[i].todos.map((j, k) => {
          return <li key={j.id}>{j.todo}</li>;
        })}
        day={Schedule[i].day}
      />
    );
  });
  return <div>{daysArray}</div>;
};

export default DayList;
