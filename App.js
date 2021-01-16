

import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"
import Header from "./Header"
import Footer from "./Footer"


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        
        return (
          <div>
            <Header />
            <div className="todo-list">
                {todoItems}
            </div>
            <Footer />
          </div>
            
        )    
    }
}

export default App
