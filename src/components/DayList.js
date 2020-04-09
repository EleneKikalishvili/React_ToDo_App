import React from "react";
import WeekDay from "./WeekDay";

const DayList = ({ schedule }) => {
  const daysArray = schedule.map((ob, i) => {
    return (
      <WeekDay
        key={schedule[i].id}
        todo={schedule[i].todos.map((sub, index) => {
          return <li key={sub.id}>{sub.todo}</li>;
        })}
        day={schedule[i].day}
      />
    );
  });
  return <div>{daysArray}</div>;
};

export default DayList;
