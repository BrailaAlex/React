import React from 'react';
import Dialog from './Dialog';

class App extends React.Component {
  state = {
    isOpen: true,
  };

  hideDialog = (e) => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }


  render() {
    return (
  <div className="app">
        <button
          onClick={this.hideDialog}
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