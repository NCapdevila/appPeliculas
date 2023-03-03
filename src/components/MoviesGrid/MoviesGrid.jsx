import style from"./MoviesGrid.module.css";
import movies from "../../data/movies.json";
import MovieCard from "../MovieCard/MovieCard";
function MoviesGrid() {
    return (
        <ul className={style.moviesGrid}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}></MovieCard>
            ))}
        </ul>
    );
}

export default MoviesGrid;
