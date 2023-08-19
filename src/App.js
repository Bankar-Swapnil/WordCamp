import React from "react";
import { hot } from "react-hot-loader/root";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CalendarApp from "./Calendar/CalendarMain.js";

function setHourstoZero(api_time) {
  let time = new Date(api_time);
  time.setHours(0, 0, 0, 0);
  return time;
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      showCalendar: true,
    };
    this.updateCalendarDisplay = this.updateCalendarDisplay.bind(this);
  }

  updateCalendarDisplay() {
    this.setState({ showCalendar: true });
  }

  componentDidMount() {
    let storage = [];
    if (this.state.data == null) {
      fetch("https://central.wordcamp.org/wp-json/wp/v2/wordcamps")
        .then((res) => res.json())
        .then((datas) => {
          datas.map((data, key) => {
            storage[setHourstoZero(data.modified_gmt)] = data;
          });
        });
      storage !== [] && this.setState({ data: storage });
    }
  }

  render() {
    return (
      <>
        {this.state.data != null && this.state.showCalendar ? (
          <CalendarApp data={this.state.data} />
        ) : null}
      </>
    );
  }
}

export default hot(App);