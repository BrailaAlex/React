import React from "react";
import Task from "./Task";
import CreateTask from "./CreateTask";

const tasks = [{ text: 'Learn React', done: false, id: 1 },
{ text: 'Lear HTML / CSS', done: false, id: 2 },
{ text: 'Learn JavaScript', done: true, id: 3 },
{ text: 'Learn Dev Tools', done: true, id: 4 },];

const sourceUrl = 'https://5ee220bb8b27f3001609462e.mockapi.io/api/v1/tasks';

class TasksList extends React.Component {
  state = {
    tasks: [],
  }

  onCreateTask = (text) => {
    if (text.length > 0) {
      const newTask = {
        text,
        done: false,
        id: this.state.tasks.length + 1
      };
      fetch(sourceUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to create task");
          }
          return this.fetchTasksData()
        });
          }  
    };

  onDeleateTask = (id) => {
    const deletedTask = this.state.tasks
      .filter(task => task.id === id);
    
    fetch(`${sourceUrl}/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(deletedTask)
    })
      .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to delete task");
      }
      return this.fetchTasksData()
    })
  }

  onToggleTaskStatus = (id) => {
        this.state.tasks
          .map(task => {
          const finishDate = task.done ? new Date() : null 
          if (task.id === id) {
            const changedTask = {
              ...task,
              done: !task.done,
              finishDate
            };
            return fetch(`${sourceUrl}/${id}`, {
              method: "PUT",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(changedTask)
            }).then((response) => {
          if (!response.ok) {
            throw new Error("Failed to toggle task");
          }
          return this.fetchTasksData()
        });
      };
    });
  }

  fetchTasksData = () => {
    return fetch(sourceUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      return response.json();
    })
      .then(data => {
        this.setState({
          tasks: data
        });
        }
        )
      }

  render() {
    this.fetchTasksData();
    const sortedList = [...this.state.tasks]
      .sort((a, b) => {
        if (a.done - b.done !== 0) {
        return a.done - b.done;
        };
    if (a.done) {
        return new Date(b.finishDate) - new Date(a.finishDate);
    }
    return new Date(b.createDate) - new Date(a.createDate);
    });
    return (
      <main className="todo-list">
        <CreateTask
          value={this.state.CreateTaskValue}
          onCreateTask={this.onCreateTask}
        />
        <ul className="list">
          {
            sortedList.map(
              task =>
                <Task key={task.id} {...task}
                  onToggleTask={this.onToggleTaskStatus}
                  onDelete={this.onDeleateTask}
                />
            )
          }
        </ul>
      </main>
    )
  }
};

export default TasksList;