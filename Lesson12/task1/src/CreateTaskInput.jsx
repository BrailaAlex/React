import React from "react";
import PropTypes from 'prop-types';

class CreateTask extends React.Component {
  state = {
    value: ''
  }

   handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  onCreateTask = () => {
    this.props.createTask(this.state.value);
    this.setState({
      value: ''
    })
  }

  render() {
    return (
        <div className="create-task">
          <input className="create-task__input"
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <button className="btn create-task__btn"
          onClick={this.onCreateTask}
          >Create</button>
        </div>
    );
  } 
};

CreateTask.propTypes = {
  createTask: PropTypes.func.isRequired
};

export default CreateTask;