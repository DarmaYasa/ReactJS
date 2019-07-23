import React from 'react'
import TodoListItem from './TodoListItem'
import './Style.css'

export default class ToDoList extends React.Component {
    state = {
        list_title: "",
        todos: [
        ]
    }


    render() {
        return (
            <div className="todo-list">
                <h2>to do list...</h2>   
                <label>Title</label> <br />
                <input 
                    placeholder="Enter title..." 
                    type="text" 
                    value={this.state.list_title}
                    onChange={(event)=> { this.setState({ list_title: event.target.value})}}
                />
                <input 
                    placeholder="Todo Item Name..." 
                    type="text"
                />
                <br />
                {
                    this.state.todos.map(todo => {
                        return (
                            <TodoListItem 
                                title={todo.title} 
                                completed={todo.completed}/>
                        )
                    })
                }
                <button>Add Item to List</button>
            </div>
        )
    }
}