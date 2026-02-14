import { useState } from "react"
import { AddMovie } from "./AddMovie"
import { MovieList } from "../MovieList/MovieList"

export const Watchlist = () => {
  const [movies, setMovies] = useState([])
  const [showAll, setShowAll] = useState(false)

  const addMovie = (title) => {
    const newMovie = {
      id: Date.now(),
      title,
      watched: false,
      reaction: null
    }
    setMovies([...movies, newMovie])
  }

  const onDeleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id))
  }

  const toggleWatched = (id) => {
    setMovies(
      movies.map(movie =>
        movie.id === id
          ? { ...movie, watched: !movie.watched, reaction: null }
          : movie
      )
    )
  }

  const setReaction = (id, reaction) => {
    setMovies(
      movies.map(movie =>
        movie.id === id
          ? { ...movie, reaction }
          : movie
      )
    )
  }

  const visibleMovies = showAll 
    ? movies 
    : movies.filter(movie => !movie.watched)

  return (
    <div className="container">
      <h1>To watch list</h1>

      <AddMovie onAddMovie={addMovie} />
      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? "Непросмотренные" : "Показать все"}
      </button>

      <MovieList
        movies={visibleMovies}
        onDeleteMovie={onDeleteMovie}
        toggleWatched={toggleWatched}
        setReaction={setReaction}
      />
    </div>
  )
}