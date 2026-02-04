import { useState } from "react"
import { AddTodo } from "../AddTodo/AddTodo"
import { TodoList } from "../TodoList/TodoList"

export const Todo = () => {

    const [todos, setTodos] = useState([])

    const onAddTodo = (newTodoString) => {
        const newTodo = {
            id: Date.now(),
            title: newTodoString
        }
        setTodos([...todos, newTodo])
    }
    const onDeleteTodo = (id) => {
        setTodos(todos.filter(item => item.id !==id))
    }
    return (
        <div className="todo-container">
            <h1>Your watch list:</h1>
            <AddTodo onAddTodo={onAddTodo}/>
            <TodoList todos={todos} onDeleteTodo={onDeleteTodo}/>  
        </div>
    )
}
