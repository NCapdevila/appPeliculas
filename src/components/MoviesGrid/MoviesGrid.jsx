import style from"./MoviesGrid.module.css";
import MovieCard from "../MovieCard/MovieCard";
import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";


function MoviesGrid({ search }) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);


    useEffect(() =>{
        setIsLoading(true);
        const searchUrl = search ? "/search/movie?query=" + search + "&page=" + page 
        : "/discover/movie?page=" + page; 
        fetch("https://api.themoviedb.org/3" + searchUrl, {
            headers:{
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTBhMmE1NzVmNjkxNDQwZWJiYWVmMGM5M2JiMGJhZiIsInN1YiI6IjYzZjAzOWRhMTUzNzZjMDA3ODE3YzNjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wR-pwUm2v3m8-5NpHKl3Wn_KmXEfRSkME6lhvafsF2k",
                "Content-Type":  "application/json;charset=utf-8'"
            },
        }).then(result => result.json().then(data => {
            setMovies((prevMovies) => prevMovies.concat(data.results))
            setHasMore(data.pages < data.total_pages);
            setIsLoading(false);
        }));
    },[search, page]);

    
    return (
        <InfiniteScroll
        dataLength={movies.length}
        next={()=>setPage((prevPage) => prevPage + 1)}
        hasMore={hasMore}
        loader={<Spinner/>}
        
        >
        <ul className={style.moviesGrid}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}></MovieCard>
            ))}
        </ul>
        </InfiniteScroll>
    );
}

export default MoviesGrid;
