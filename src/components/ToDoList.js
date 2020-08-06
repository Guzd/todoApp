import React from "react"
import ToDoItem from "./ToDoItem.js"
import deleteAllLogo from '../images/recycle-bin.svg';
class TodosList extends React.Component {
 render() {
  let content
  if (this.props.todos.length === 0) {
   content = <h3 className="todo-list-notTodo">There is not ToDo's, take a break!</h3>
  } else {
   {
    content = this.props.todos.map((todo, index) => (
     <ToDoItem todo={todo} key={index} deleteToDo={this.props.deleteToDo} />
    ))
   }
  }

  return (
   <div className="todo-list">
    <div className="todo-list-header">
     <h2>ToDo list</h2>
     <img src={deleteAllLogo} className="todo-item-removeIcon" onClick={() => this.props.removeAll()} style={{ width: '30px' }} alt="delete all" />
    </div>
    {content}
   </div>
  )
 }
}

export default TodosList