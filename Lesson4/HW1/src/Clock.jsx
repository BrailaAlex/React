import React, {Component} from "react";
import "./clock.scss"
import moment from "moment";

// const setOffset = offset => moment()
//   .utcOffset(offset)
//   .format("h:mm:ss a");

const setOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset()/60;
  debugger;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
}
debugger;

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeZone: setOffset(props.offset).toLocaleTimeString(),
      location: props.location
    };

    setInterval(() => {
      this.setState({
        timeZone: setOffset(props.offset).toLocaleTimeString()
      });
    }, 1000);
  }

  render() {
    return (
      <div className = "clock">
        <div className="clock__location">
        {this.state.location}
        </div>
        <div className="clock__time">
        {this.state.timeZone}
        </div>
      </div>
    );
  }
}

export default Clock;