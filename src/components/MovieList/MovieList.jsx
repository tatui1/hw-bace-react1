import { MovieItem } from "../MovieItem/MovieItem"

export const MovieList = ({
  movies, onDeleteMovie, toggleWatched, setReaction
}) => {
  return (
    <div className="list">
      {movies.length === 0 ? (
        <p className="empty-message">Список пуст. Добавьте фильмы!</p>) : (
        movies.map(movie => (
          <MovieItem
            key={movie.id}
            movie={movie}
            onDeleteMovie={onDeleteMovie}
            toggleWatched={toggleWatched}
            setReaction={setReaction}/>
        ))
      )}
    </div>
  )
}