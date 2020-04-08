import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './containers/App';
import WeekDay from "./components/WeekDAy";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import { todos } from "./components/ToDos";

ReactDOM.render(
  <React.StrictMode>
    <WeekDay id={todos[0].id} todo={todos[0].todo} day={todos[0].day} />
    <WeekDay id={todos[1].id} todo={todos[1].todo} day={todos[1].day} />
    <WeekDay id={todos[1].id} todo={todos[1].todo} day={todos[2].day} />
    <WeekDay id={todos[1].id} todo={todos[1].todo} day={todos[3].day} />
    <WeekDay id={todos[1].id} todo={todos[1].todo} day={todos[4].day} />
    <WeekDay id={todos[1].id} todo={todos[1].todo} day={todos[5].day} />
    <WeekDay id={todos[1].id} todo={todos[1].todo} day={todos[6].day} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
