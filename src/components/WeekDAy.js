import React from "react";

const Day = (props) => {
  return (
    <div className="bg-washed-red shadow-5 ma3 pa3 grow shadow-hover br3 dib w-20">
      <h1 className="tc">{props.day}</h1>
      <ul>
        <li>{props.todo[0]}</li>
      </ul>
    </div>
  );
};

export default Day;
