import { LikeDislike } from "../LikeDislike/LikeDislike"

export const MovieItem = ({movie, onDeleteMovie, toggleWatched, setReaction}) => {
  return (
    <div className="todo-item">
      <span className="movie-title">{movie.title}</span>

      <div className="controls">
        <button onClick={() => toggleWatched(movie.id)}>
          {movie.watched ? "просмотренное" : "не просмотренное"}
          </button>

        <button onClick={() => onDeleteMovie(movie.id)}>X</button>
        {movie.watched && (
          <LikeDislike
            reaction={movie.reaction}
            onLike={() => setReaction(movie.id, "like")}
            onDislike={() => setReaction(movie.id, "dislike")}
          />
        )}
      </div>
    </div>
  )
}