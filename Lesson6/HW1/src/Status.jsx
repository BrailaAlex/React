import React from "react";
import Online from "./Online";
import Offline from "./Offline";


class Status extends React.Component {
  state = {
    isOnline: false
  }

  onLog = () => {
    if (!this.state.isOnline) {
      this.setState({
      isOnline: true
      })
    }
  }

  render() {
    return (
      !this.state.isOnline
      ? <Offline login={this.onLog} />
      : <Online />
    );
  }
}

export default Status;