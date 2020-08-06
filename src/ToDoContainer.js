import React, { Component } from 'react'
import Header from "./components/Header"
import ToDoList from "./components/ToDoList"
import ToDoInput from "./components/ToDoInput"
import { v4 as uuid } from 'uuid';
import './App.css';

class ToDoContainer extends Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
    this.addToDo = this.addToDo.bind(this)
    this.deleteToDo = this.deleteToDo.bind(this)
    this.removeAll = this.removeAll.bind(this)
  }

  addToDo(title) {
    const newTodo = {
      id: uuid(),
      title: title,
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  deleteToDo(uuid) {
    console.log('delete', uuid)
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== uuid;
        })
      ]
    });
  }

  removeAll() {
    this.setState({
      todos: []
    });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <ToDoInput addToDo={this.addToDo} />
        <ToDoList todos={this.state.todos} deleteToDo={this.deleteToDo} removeAll={this.removeAll} />
      </div>
    )
  }
}
export default ToDoContainer;
