import React from 'react';
import Dialog from './Dialog';

class App extends React.Component {
  state = {
    isOpen: false,
  };

  hideDialog = (e) => {
    this.setState({
      isOpen: false,
    })
  }

  showDialog = (e) => {
    this.setState({
      isOpen: true,
    })
  }


  render() {
    return (
  <div className="app">
        <button
          onClick={this.showDialog}
          className="btn">Show dialog</button>
        { this.state.isOpen && <Dialog onClose={this.hideDialog} title="Recommendation">
          <p>Use immutable array methods
      to work with data. It will help to avoid bugs</p>
          </Dialog>
        }
  </div>
      );
  }
};

export default App;