import { TodoItem } from "../TodoItem/TodoItem"
export const TodoList = (props) => {
    return (
        <div className="list-container">
            {props.todos.map(todo => (
                <TodoItem todo={todo} key={todo.id} onDeleteTodo={props.onDeleteTodo}/>
            ))}
        </div>
    )
}