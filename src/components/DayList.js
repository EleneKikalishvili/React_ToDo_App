import React from "react";
import { Schedule } from "./Schedule";
import WeekDay from "./WeekDAy";

const DayList = () => {
  const daysArray = Schedule.map((ob, i) => {
    return (
      <WeekDay
        key={Schedule[i].id}
        todo={Schedule[i].todos.map((sub) => {
          return <li key={sub.id}>{sub.todo}</li>;
        })}
        day={Schedule[i].day}
      />
    );
  });
  return <div>{daysArray}</div>;
};

export default DayList;
