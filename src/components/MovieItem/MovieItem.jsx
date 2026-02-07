import { LikeDislike } from "../LikeDislike/LikeDislike"

export const MovieItem = ({movie, onDeleteMovie, setReaction}) => {
  return (
    <div className="todo-item">
    <span className="movie-title">{movie.title}</span>

      <div className="controls">

      <button onClick={() => onDeleteMovie(movie.id)}>X</button>

      <LikeDislike
          reaction={movie.reaction}
          onLike={() => setReaction(movie.id, "like")}
          onDislike={() => setReaction(movie.id, "dislike")}
        />
      </div>
    </div>
  )
}