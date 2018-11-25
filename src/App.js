import React, { Component } from 'react';
import "./App.css";
import Tasks from './Tasks'
import AddTask from './AddTask'


class App extends Component {

  constructor(props){
    super(props);
    this.AddNewTaskHandler = this.AddNewTaskHandler.bind(this);
    this.CloseModalHandler = this.CloseModalHandler.bind(this);
  }

  state = {
    addNewButtonClicked: false,
    tasks: []
  }

  AddNewTaskHandler(e){
    this.setState({
      addNewButtonClicked: true
    });
  }

  CloseModalHandler() {
    this.setState({
      addNewButtonClicked: false
    });
  }

  AddTask = (task) =>{
    task.id = (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    let tasks = [...this.state.tasks, task];
    this.setState({
      addNewButtonClicked: false,
      tasks: tasks
    });
  }

  DeleteTask = (id) =>{
    let tasks = this.state.tasks.filter(task => {
      return task.id !== id
    });
    this.setState({
      addNewButtonClicked: false,
      tasks: tasks
    });
  }


  render() {
    return (
      <div className="wrapper">
      <div>
          <header>
            <div className="row">
              <div className="col">
                <h1>To Do List</h1>
              </div>
              <div className="col company-details">
                <button type="button" className="btn btn-success addbutton" onClick={this.AddNewTaskHandler} addTask={this.AddTask}>Add New Task</button>
              </div>
            </div>
          </header>
        </div>

        <AddTask addNewButtonClicked={this.state.addNewButtonClicked} closeModal={this.CloseModalHandler} AddTask={this.AddTask}/>
        < Tasks tasks={this.state.tasks} deleteTask={this.DeleteTask}/>
      </div>
    );
  }
}

export default App;
