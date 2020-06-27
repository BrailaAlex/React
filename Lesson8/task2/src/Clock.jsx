import React from "react";
import moment from 'moment'

const setOffset = (offset) => {
    return moment()
      .utcOffset(offset)
      .format("h:mm:ss a");
  }

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: setOffset(this.props.offset),
    };

  }

  componentDidMount() {
    this.clockId = setInterval(() => {
          this.setState({
            date: setOffset(this.props.offset)
            })
        }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockId);
  }


  render() {
    return (
      <div className="clock">
        <div className="clock__location">
        {this.props.date}
        </div>
        <div className="clock__time">
        {this.state.date}
        </div>
      </div>
    )
  }
}

export default Clock;