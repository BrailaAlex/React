import React from 'react';
import Expand from './City';


class Page extends React.Component {
  state = {
    isOpen: false
  };

  toggleDialog = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div className="app">
        <Expand
          title="some title"
          isOpen={this.state.isOpen}
          onClose={this.toggleDialog}
        >
          <p>
            Hooks are a new addition in React 16.8. They let you use state and
            other React features without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
}

export default Page;