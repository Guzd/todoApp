import React, { Component } from 'react'
import Header from "./components/Header"
import ToDoList from "./components/ToDoList"
import ToDoInput from "./components/ToDoInput"
import './App.css';

class ToDoContainer extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          title: "Deploy server"
        },
        {
          title: "Setup project"
        }
      ]
    }
  }
  render() {
    return (
      <div className="container">
        <Header />
        <ToDoInput />
        <ToDoList todos={this.state.todos} />
      </div>
    )
  }
}
export default ToDoContainer;
