import React from 'react'

const TodoListItem = (props) => {
    return (
        <div className="list">
            <div>
                <input type="checkbox" checked={props.completed} />
                <span>{props.title}</span>
            </div>
            <div><button onClick={() => props.deleteTodoByIndex(props.index)}>x</button></div>
        </div>
    )
}

export default TodoListItem