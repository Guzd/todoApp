import React from "react"
import removeIcon from '../images/remove.svg';
class ToDoItem extends React.Component {
 render() {
  const { id, title } = this.props.todo
  return (
   <li className="todo-item">
    <span className="todo-item-content">{title}</span>
    <img src={removeIcon} className="todo-item-removeIcon" onClick={() => this.props.deleteToDo(id)} style={{ width: '30px' }} alt="delete all" />
   </li>
  )
 }
}

export default ToDoItem