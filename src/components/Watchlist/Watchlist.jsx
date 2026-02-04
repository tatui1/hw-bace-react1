import { useState } from "react"
import { AddMovie } from "../OnAddMovie/OnAddMovie"
import { MovieList } from "../MovieList/MovieList"

export const Watchlist = () => {
    const [movies, setMovies] = useState([])

    const onAddMovie = (movieTitle) => {
        const newMessage = {
            id: Date.now(),
            title: movieTitle
        }
        setMovies([...movies, newMessage])
    }

    const onDeleteMovie = (id) => {
        setMovies(movies.filter(movie => movie.id !== id))
    }

    return (
        <div className="container"> 
            <h1>To watch list:</h1>
            <AddMovie onAddMovie={onAddMovie}/>
            <MovieList movies={movies} onDeleteMovie={onDeleteMovie}/>  
        </div>
    )
}