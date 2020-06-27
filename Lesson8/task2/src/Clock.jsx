import React from "react";

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
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
}

export default Clock;