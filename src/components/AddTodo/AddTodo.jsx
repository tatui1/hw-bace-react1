import { useState } from "react";
export const AddTodo = (props) => {
    const [todoValue, setTodoValue] = useState('')
    const submitTodo = () => {
        props.onAddTodo(todoValue)
        setTodoValue('')
    }
    return(
        <div className="add-form">
            <input 
                placeholder =" write your todo"
                value={todoValue}
                type="text" 
                onChange={e => setTodoValue(e.target.value)}
            />
            <button onClick={submitTodo} > Add Todo </button>
        </div> 
    )
}
export const TodoItem = (props) => {
    return (
      <div className="todo-item">
        <input type="text" value={props.todo.title} readOnly />
        <button onClick={() => props.onDeleteTodo(props.todo.id)}>delete</button>
      </div>
  )
}