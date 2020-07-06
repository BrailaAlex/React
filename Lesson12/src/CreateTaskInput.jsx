import React from "react";

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
    this.props.onCreateTask(this.state.value);
    this.setState({
      value: ''
    });
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

export default CreateTask;

//1. Take text from input
//2. Create task with this text
//3. Add the  cteated task object to the list