import React from 'react'
import TodoListItem from './TodoListItem'
import './Style.css'

export default class ToDoList extends React.Component {
    render() {
        return (
            <div className="todo-list">
                to do list...   
                <TodoListItem />
                <TodoListItem />
                <TodoListItem />
                <TodoListItem />

            </div>
        )
    }
}