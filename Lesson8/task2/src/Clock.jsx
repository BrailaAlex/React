import React from "react";
import moment from 'moment'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
    };

  }

  componentDidMount() {
    this.clockId = setInterval(() => {
          this.setState({
            date: new Date()
            })
        }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockId);
  }


  render() {
    return (
      <>
        <div className="clock__location">
        {this.props.location}
        </div>
        <div className="clock__time">
        {moment(this.state.date)
        .utcOffset(this.props.offset)
        .format("h:mm:ss a")}
        </div>
      </>
    )
  }
}

export default Clock;