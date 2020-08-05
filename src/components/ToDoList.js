import React from "react"
import ToDoItem from "./ToDoItem.js"

class TodosList extends React.Component {
 render() {
  return (
   <div>
    {this.props.todos.map(todo => (
     <ToDoItem todo={todo} />
    ))}
   </div>
  )
 }
}

export default TodosList