import React from 'react';
import Expand from './Expand';

class App extends React.Component {
  state = {
    isOpen: false
  };

  onToggleArrow = () => {
      this.setState({
        isOpen: !this.state.isOpen
      })
  }

  render() {
    return(
      <div className="app">
        <Expand
          onToggleContent={this.onToggleArrow}
          title="Some title"
          isOpen={this.state.isOpen}>
        <p>Hooks are a new addition in React 16.8. They let you use state and other React features without writing a
        class.</p> 
        </Expand>
      </div>
    )
  }
};

export default App;