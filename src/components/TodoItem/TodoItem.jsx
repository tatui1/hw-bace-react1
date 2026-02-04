export const TodoItem = (props) => {

  return (
    <div className="todo-item">
      <input type="text" value={props.todo.title} readOnly />
      <button onClick={() => props.onDeleteTodo(props.todo.id)}>delete</button>
    </div>
  )
}