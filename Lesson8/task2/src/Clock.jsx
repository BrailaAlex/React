import React, {Component} from "react";
import moment from "moment";

const formatTime = offset => {
  return moment()
    .utcOffset(offset)
    .format("h:mm:ss A");
};

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: formatTime(this.props.offset)
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        time: formatTime(this.props.offset)
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.state.time}</div>
      </div>
    );
  }
}

export default Clock;