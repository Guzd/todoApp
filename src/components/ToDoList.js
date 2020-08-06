import React from "react"
import ToDoItem from "./ToDoItem.js"
import deleteAllLogo from '../images/recycle-bin.svg';
class TodosList extends React.Component {
 render() {
  return (
   <div className="todo-list">
    <div className="todo-list-header">
     <h2>ToDo list</h2>
     <img src={deleteAllLogo} style={{ width: '30px' }} alt="delete all" />
    </div>
    {this.props.todos.map((todo, index) => (
     <ToDoItem todo={todo} key={index} />
    ))}
   </div>
  )
 }
}

export default TodosList