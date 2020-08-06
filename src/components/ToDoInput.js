import React, { Component } from "react"

class ToDoInput extends Component {
 render() {
  return (
   <form className="input-container">
    <input
     type="text"
     className="input-text"
     placeholder="Add new todo..."
     name="title"
    />
    <input type="submit" className="input-submit" />
   </form>
  )
 }
}
export default ToDoInput;