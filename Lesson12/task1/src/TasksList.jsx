import React from "react";
import Task from "./Task";
import CreateTask from "./CreateTaskInput";
import { createTask, fetchTasksList, updateTask, deleteTask} from "./tasksGateway";

const tasks = [
  { text: 'Learn React', done: false, id: 1 },
  { text: 'Learn HTML / CSS', done: false, id: 2 },
  { text: 'Learn JavaScript', done: true, id: 3 },
  { text: 'Learn Dev Tools', done: true, id: 4 },
];

class TasksList extends React.Component {
  state = {
    tasks: [],
  }

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTasksList()
      .then(tasksList => this.setState({
        tasks: tasksList
      }));
  }

  onCreateTask = (text) => {
    if (text.length > 0) {
      const newTask = {
        text,
        done: false
      };
      return createTask(newTask)
        .then(() => this.fetchTasks())
    }  
    };

  handleTaskDelete = (id) => deleteTask(id).then(() => this.fetchTasks());

  handleTaskStatusChange = (id) => {
    const { done, text } = this.state.tasks
      .find(task => task.id === id)
    const updatedTask = {
              text,
              done: !done,
              finishDate: (done ? new Date() : null)
    };
    return updateTask(id, updatedTask).then(() => this.fetchTasks());
  };

  render() {
    if (!this.state.tasks) {
      return null;
    }
    const sortedList = this.state.tasks.slice()
      .sort((a, b) => a.done - b.done);
    return (
      <main className="todo-list">
        <CreateTask
          value={this.state.CreateTaskValue}
          createTask={this.onCreateTask}
        />
        <ul className="list">
          {
            sortedList.map(
              task =>
                <Task key={task.id} {...task}
                  onToggleTask={this.handleTaskStatusChange}
                  onDelete={this.handleTaskDelete}
                />
            )
          }
        </ul>
      </main>
    )
  }
};

export default TasksList;