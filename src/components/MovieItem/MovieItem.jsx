export const MovieItem = ({ movie, onDeleteMovie }) => {
  return (
    <div className="todo-item">
      <input type="text" value={movie.title} readOnly />
      <button onClick={() => onDeleteMovie(movie.id)}>X</button>
    </div>
  )
}