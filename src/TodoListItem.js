import React from 'react'

const TodoListItem = (props) => {
    console.log(props)
    return (
        <div className="list">
            <div>
                <input type="checkbox" checked={props.completed} />
                <span>{props.title}</span>
            </div>
            <div><button>x</button></div>
        </div>
    )
}

export default TodoListItem