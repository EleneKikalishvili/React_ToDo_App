import React, { Component } from "react";
import "./App.css";
import DayList from "../components/DayList";
import { Schedule } from "../components/Schedule";
class App extends Component {
  constructor() {
    super();

    this.state = {
      schedule: Schedule,
      searchField: "",
    };
  }

  render() {
    const { schedule, searchField } = this.state;
    const filteredSchedule = schedule.filter((day) =>
      day.day.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="tc">
        <input
          className="ma5"
          type="search"
          placeholder="search"
          onChange={(e) => {
            this.setState({ searchField: e.target.value });
          }}
        />
        <DayList schedule={filteredSchedule} />
      </div>
    );
  }
}
export default App;
