import React from 'react';

class ConnectionStatus extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            status: 'online'
        }
    }
    
    componentDidMount(){
        window.addEventListener('online', this.handleStatus);
        window.addEventListener('offline', this.handleStatus);
    }

    componentWillUnmount() {
       window.removeEventListener('online', this.handleStatus);
        window.removeEventListener('offline', this.handleStatus); 
    }

    handleStatus = (e) => {
        this.setState({
            status: e.type
        })
    }    

    render() {
        return <div className={`status${this.state.status === 'offline'
            ? '_offline'
            : ''}`}>
            {this.state.status}
            </div>;
    }
};

export default ConnectionStatus;