import React from "react";

class ConnectionStatus extends React.Component {
  state = {
    status: 'online',
  }
  
  componentDidMount() {
    window.addEventListener('online', this.onToggleStatus);
    window.addEventListener('offline', this.onToggleStatus);
  };
  
  componentWillUnmount() {
    window.removeEventListener('online', this.onToggleStatus);
    window.removeEventListener('offline', this.onToggleStatus);
  };

  onToggleStatus = event => {
    this.setState({
      status: event.type
    })
  }

  
  
  render() {
    console.log(this.props.children)
    const statusChange = this.state.status === "offline"
      ? "status_offline"
      : "";
      return (
        <div className={`status ${statusChange}`}>{this.state.status}</div>
    )
    }
}

export default ConnectionStatus;
