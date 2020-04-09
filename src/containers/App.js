import React, { Component } from "react";
import DayList from "../components/DayList";
import { Schedule } from "../components/Schedule";
import SearchBox from "../components/SearchBox";
import SelectOptions from "../components/SelectOptions";

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
        <SearchBox
          placeholder="Search Days"
          handelChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <SelectOptions
          handelChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <DayList schedule={filteredSchedule} />
      </div>
    );
  }
}
export default App;
