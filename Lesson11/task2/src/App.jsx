import React from 'react';
import Dialog from './Dialog';

class App extends React.Component {
  state = {
    isOpen: false,
  };

  onToggleDialog = (e) => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }


  render() {
    return (
  <div className="app">
        <button
          onClick={this.onToggleDialog}
          className="btn">Show dialog</button>
        {this.state.isOpen && <Dialog
          isOpen={this.state.isOpen}
          onClose={this.onToggleDialog}
          title="Recommendation">
          <p>Use immutable array methods
      to work with data. It will help to avoid bugs</p>
          </Dialog>
        }
  </div>
      );
  }
};

export default App;