import { MovieItem } from "../MovieItem/MovieItem"
export const MovieList = ({ movies, onDeleteMovie }) => {
    return (
        <div className="list">
            {movies.map(movie => (
                <MovieItem 
                    key={movie.id} 
                    movie={movie} 
                    onDeleteMovie={onDeleteMovie}
                />
            ))}
        </div>
    )
}