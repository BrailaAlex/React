import React, { Component } from 'react';

class Search extends Component {
  state = {
    value: ''
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
    console.log(this.state.value);
  }

  alertValue = (event) => {
    event.preventDefault();
    alert (`Search text: ${this.state.value}`)
  }

  render() {
    return (
      <form className="search"
      onSubmit={this.alertValue}>
        <input
          value={this.state.value}
        onChange={this.handleChange}
          type="text"
          className="search__input" />
      <button
        className="search__button"
          type="submit"
        >Search</button>
      </form>);
  }
  
}

export default Search;