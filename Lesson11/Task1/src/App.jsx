import React from 'react';
import Numbers from './Numbers';
import EvenNumbers from './EvenNumbers';
import OddNumbers from './OddNumbers';

class App extends React.Component {
  state = {
    number: 0,
  };

  componentDidMount() {
    this.IntervalId = setInterval(() => {
      this.setState({
        number: this.state.number + 1
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.IntervalId);
  }

  render() {
    const number = this.state.number;
    return(
      <div className="app">
        <Numbers title="All numbers" number={number} />
        <EvenNumbers title="Even number" number={number} />
        <OddNumbers title="Odd number" number={number} />
        <Numbers title="All numbers" number={17} />
      </div>
    )
  }
};

export default App;