import React from "react"
import removeIcon from '../images/remove.svg';
class ToDoItem extends React.Component {
 constructor() {
  super()
  this.state = {
   completed: false
  }
  this.complete = this.complete.bind(this)
 }
 complete() {
  this.setState(prevState => {
   return {
    completed: !prevState.completed
   }
  })
 }
 render() {
  const completedStyle = {
   fontStyle: "italic",
   textDecoration: "line-through",
   opacity: 0.5,
  }

  const { id, title } = this.props.todo
  return (
   <li className="todo-item">
    <span className="todo-item-content" style={this.state.completed ? completedStyle : null} onClick={this.complete}>{title}</span>
    <img src={removeIcon} className="todo-item-removeIcon" onClick={() => this.props.deleteToDo(id)} style={{ width: '30px' }} alt="delete all" />
   </li>
  )
 }
}

export default ToDoItem