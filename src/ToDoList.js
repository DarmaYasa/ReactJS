import React from 'react'
import TodoListItem from './TodoListItem'
import './Style.css'

export default class ToDoList extends React.Component {
    state = {
        list_title: "I'm the title",
        todos: [
            {
                title: 'Go jogging',
                completed: false
            },
            {
                title: 'Run on the beach',
                completed: true
            }
        ]
    }


    render() {
        return (
            <div className="todo-list">
                <h2>to do list...</h2>   
                <label>Title</label> <br />
                <input placeholder="Enter title..." type="text" value={this.state.list_title}/>
                <input placeholder="Todo Item Name..." type="text" />
                <br />
                {
                    this.state.todos.map(todo => {
                        return (
                            <TodoListItem title={todo.title} completed={todo.completed}/>
                        )
                    })
                }
                <button>Add Item to List</button>
            </div>
        )
    }
}