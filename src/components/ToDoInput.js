import React, { Component } from "react"
import addIcon from '../images/add.svg';
class ToDoInput extends Component {
 constructor() {
  super()
  this.state = {
   title: '',
  }

  this.onChange = this.onChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
 }

 onChange(event) {
  this.setState({
   [event.target.name]: event.target.value,
  })
 }

 handleSubmit(event) {
  event.preventDefault();
  this.props.addToDo(this.state.title);
  this.setState({
   title: ''
  });
 };

 render() {
  return (
   <form onSubmit={this.handleSubmit} className="input-container">
    <input
     type="text"
     className="input-text"
     placeholder="Agrega una nueva tarea..."
     name="title"
     onChange={this.onChange}
     value={this.state.title}
     required
    />
    <button type="submit" className="input-submit" value="Add" >
     <img src={addIcon} style={{ width: '30px' }} alt="addIcon" />
    </button>
   </form>
  )
 }
}
export default ToDoInput;