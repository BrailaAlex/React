import React from 'react';
import Expand from './Expand';


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
    const element =  <p>
            Hooks are a new addition in React 16.8. They let you use state and
            other React features without writing a class.
          </p>
    return (
      <div className="app">
        <Expand
          title="Some title"
          isOpen={this.state.isOpen}
          onClose={this.toggleDialog}
        >
          {element}
        </Expand>
      </div>
    );
  }
}

export default Page;