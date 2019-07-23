import React from 'react'
import TodoListItem from './TodoListItem'

export default class ToDoList extends React.Component {
    render() {
        return (
            <div>
                to do list...   
                <TodoListItem />
                <TodoListItem />
                <TodoListItem />
                <TodoListItem />

            </div>
        )
    }
}