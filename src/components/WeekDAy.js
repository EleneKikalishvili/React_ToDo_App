import React from "react";

const Day = (props) => {
  const { day, todo } = props;
  return (
    <div className="bg-washed-red shadow-5 ma3 pa3 grow shadow-hover br3 dib w-20">
      <h1 className="tc">{day}</h1>
      <ul>{todo}</ul>
    </div>
  );
};

export default Day;
