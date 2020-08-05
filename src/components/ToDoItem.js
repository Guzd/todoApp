import React from "react"

class ToDoItem extends React.Component {
 render() {
  const { title } = this.props.todo
  return (
   <li className="todo-item">
    <button>Delete</button>
    <span >{title}</span>
   </li>
  )
 }
}

export default ToDoItem