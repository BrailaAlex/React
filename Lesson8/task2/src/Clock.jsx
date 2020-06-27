import React from "react";
import moment from 'moment'


class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: this.setOffset(this.props.offset),
    };

  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
          this.setState({
            date: this.setOffset(this.props.offset)
            })
        }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  setOffset = (offset) => {
    return moment()
      .utcOffset(offset)
      .format("h:mm:ss a");
  }


  render() {
    return (
      <div className="clock">
        <div className="clock__location">
        {this.props.location}
        </div>
        <div className="clock__time">
        {this.state.date}
        </div>
      </div>
    )
  }
}

export default Clock;