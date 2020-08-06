import React from "react"
import removeIcon from '../images/remove.svg';
class ToDoItem extends React.Component {
 render() {
  const { title } = this.props.todo
  return (
   <li className="todo-item">
    <span >{title}</span>
    <img src={removeIcon} style={{ width: '30px' }} alt="delete all" />
   </li>
  )
 }
}

export default ToDoItem