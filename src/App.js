import React from 'react'
import ToDoList from './ToDoList';
import {Link, Route, Switch} from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path='/todos' component={ToDoList}/>
                    <Route path='/profile' component={Profile}/>
                </Switch>
                <Navigation />
            </React.Fragment>
        )
    }
}
const Profile = () => {
    return(
        <div>
            Profile
        </div>
    )
}

const Navigation = () => {
    return(
        <div>
            <Link to='/todos'> Todo List </Link> 
            <Link to='/profile'> Profile </Link>
        </div>
    )
}
export default App 