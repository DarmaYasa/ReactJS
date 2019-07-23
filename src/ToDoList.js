import React from 'react'
import TodoListItem from './TodoListItem'
import './Style.css'

export default class ToDoList extends React.Component {
    state = {
        list_title: "",
        current_value: "",
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
                    value={this.state.current_value}
                    onChange={(event) => {this.setState({current_value: event.target.value})}}
                />
                <br />
               
                <button onClick={() => {
                    this.setState(prevState => ({
                            todos: prevState.todos.concat({
                                title: this.state.current_value, 
                                completed: false
                            }),
                            current_value: ''
                        })
                    )
                }}> Add Item to List </button>


                 {
                    //displaying the list     
                    this.state.todos.map(todo => {
                        return (
                            <TodoListItem 
                                title={todo.title} 
                                completed={todo.completed}/>
                        )
                    })
                }
            </div>
        )
    }
}