import React from 'react';
import Spinner from './Spinner';

const withDataLoader = (sourceUrl, WrappedComponent) => {
  class withDataLoader extends React.Component {
    state = {
      data: null
    };

    componentDidMount() {
      this.getInfo()
    }

    getInfo = () => {
      fetch(sourceUrl)
        .then(response => {
          if (!response.ok) {
            return null;
          };
          return response.json()
            .then(data => this.setState({ data }));
        })
    }
    
    render() {
      return (
        this.state.data
          ? <WrappedComponent data={this.state.data} />
          : <Spinner />
      )
    }
  }
  return withDataLoader;
};

export default withDataLoader;