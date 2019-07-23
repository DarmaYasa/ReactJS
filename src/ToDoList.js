import React from 'react'
import TodoListItem from './TodoListItem'
import './Style.css'

export default class ToDoList extends React.Component {

    constructor() {
        super()
        this.state = {
            list_title: "",
            current_value: "",
            todos: [
            ]
        }

        this.deleteTodoByIndex = this.deleteTodoByIndex.bind(this)
    }
    

    deleteTodoByIndex(index) {
        console.log('index', index)
    } 


    render() {
        return (
            <div className="todo-wrapper">
                <h2>to do list...</h2>   
                <div className="input">
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
                
                    <button onClick={() => {
                        this.setState(prevState => ({
                                todos: prevState.todos.concat({
                                    title: this.state.current_value, 
                                    completed: false
                                }),
                                current_value: ''
                            })
                        )
                    }}> + </button>
                </div>

                <div className="todo-list">
                {
                    //displaying the list     
                    this.state.todos.map((todo, index) => {
                        return (
                            <TodoListItem 
                                key={index}
                                index={index}
                                deleteTodoByIndex={this.deleteTodoByIndex}
                                title={todo.title} 
                                completed={todo.completed}
                            />
                        )
                    })
                }
                <br />
                </div>
            </div>
        )
    }
}