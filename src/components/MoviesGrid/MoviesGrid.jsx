import style from"./MoviesGrid.module.css";
import MovieCard from "../MovieCard/MovieCard";
import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import { useLocation } from "react-router-dom";

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

function MoviesGrid() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const query = useQuery();
    const search = query.get("search");


    

    useEffect(() =>{
        setIsLoading(true);
        const searchUrl = search ? "/search/movie?query=" + search : "/discover/movie"
        fetch("https://api.themoviedb.org/3" + searchUrl, {
            headers:{
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTBhMmE1NzVmNjkxNDQwZWJiYWVmMGM5M2JiMGJhZiIsInN1YiI6IjYzZjAzOWRhMTUzNzZjMDA3ODE3YzNjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wR-pwUm2v3m8-5NpHKl3Wn_KmXEfRSkME6lhvafsF2k",
                "Content-Type":  "application/json;charset=utf-8'"
            },
        }).then(result => result.json().then(data => {
            setMovies(data.results)
            setIsLoading(false);
        }));
    },[search]);

    if(isLoading){
        return <Spinner></Spinner>
    }
    return (
        <ul className={style.moviesGrid}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}></MovieCard>
            ))}
        </ul>
    );
}

export default MoviesGrid;
