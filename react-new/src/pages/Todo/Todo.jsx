import React, { Component } from 'react'
import { nanoid } from 'nanoid'

export default class Todo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      value: "",
    }
  }
  handleValue = (e) => {
    this.setState({ value: e.target.value })
  }

  handleAdd = () => {
    if (this.state.value) {
      const newTodo = {
        value: this.state.value.trim(),
        id: nanoid(),
        completed: false
      }
      this.setState({ todos: [...this.state.todos, newTodo] })
    }
  }

  handleDelete = (id) => () => {
    this.setState({ todos: this.state.todos.filter(i => i.id !== id) })
  }

  handleToggle = (id) => () => {
    this.setState({
      todos: this.state.todos.map(i => {
        return i.id === id ? { ...i, completed: !i.completed } : i
      })
    })
  }

  render() {
    return (
      <div>
        <input onChange={this.handleValue} />
        <button onClick={this.handleAdd}>add</button>
        {this.state.todos.map(i => {
          return <div style={{ textDecoration: i.completed ? "line-through" : 'none' }} key={i.id}>{i.value}<input onChange={this.handleToggle(i.id)} type="checkbox" checked={i.completed} />
            <button onClick={this.handleDelete(i.id)}>delete</button>
          </div>
        })}
      </div>
    )
  }
}
