import React from "react";
import Online from "./Online";
import Offline from "./Offline";


class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: false,
    }
  }

  onLog = () => {
    if(!this.state.isOnline) {this.setState({
      isOnline: true
    })}
  }

  render() {
    const statusTag = this.state.isOnline ? <Online />
      : <Offline login={this.onLog} />;
    // debugger;
    return (statusTag)
  }
}

export default Status;