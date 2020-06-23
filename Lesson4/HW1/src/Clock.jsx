import React, {Component} from "react";
import "./clock.scss"
import moment from "moment";

const setOffset = offset => moment()
  .utcOffset(offset)
  .format("h:mm:ss a");

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      timeZone: 0
    };

    setInterval(() => {
      this.setState({
        timeZone: setOffset(props.offset)
      });
    }, 1000);
  }

  render() {
    return (
      <div className = "clock">
      <div className="clock__location">{this.props.city}</div>
      <div className="clock__time">{this.state.timeZone}</div>
      </div>
    );
  }
}

export default Clock;