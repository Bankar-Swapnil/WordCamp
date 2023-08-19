import React from "react";
import {hot} from 'react-hot-loader/root'
import Calendar from "./Calendar.js";
import './Calendar.css'

class CalendarApp extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
            <b>WordCamp Calendar</b>
            </span>
          </div>
        </header>
        <main>
          {this.props.data  && <Calendar data = {this.props.data}/>}
        </main>
        <footer id="footer">
          <span>WordCamp Calendar Assignment</span>
        </footer>
      </div>
    );
  }
}

export default hot(CalendarApp);