import React from 'react'
import TodoListItem from './TodoListItem'
import './Style.css'

export default class ToDoList extends React.Component {
    render() {
        return (
            <div className="todo-list">
                <h2>to do list...</h2>   
                <label>Title</label> <br />
                <input placeholder="Enter title..." type="text" />
                <input placeholder="Todo Item Name..." type="text" />
                <button>Add Item to List</button>
            </div>
        )
    }
}