import style from"./MoviesGrid.module.css";
import MovieCard from "../MovieCard/MovieCard";
import { useEffect, useState } from "react";

function MoviesGrid() {
    const [movies, setMovies] = useState([]);
    

    useEffect(() =>{
        fetch("https://api.themoviedb.org/3/discover/movie", {
            headers:{
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTBhMmE1NzVmNjkxNDQwZWJiYWVmMGM5M2JiMGJhZiIsInN1YiI6IjYzZjAzOWRhMTUzNzZjMDA3ODE3YzNjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wR-pwUm2v3m8-5NpHKl3Wn_KmXEfRSkME6lhvafsF2k",
                "Content-Type":  "application/json;charset=utf-8'"
            },
        }).then(result => result.json().then(data => {
           setMovies(data.results)
        }));
    },[]);

    return (
        <ul className={style.moviesGrid}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}></MovieCard>
            ))}
        </ul>
    );
}

export default MoviesGrid;
