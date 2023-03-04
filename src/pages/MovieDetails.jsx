import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import styles from './MovieDetails.module.css'

function MovieDetails(){
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  
  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie" + movieId, {
            headers:{
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTBhMmE1NzVmNjkxNDQwZWJiYWVmMGM5M2JiMGJhZiIsInN1YiI6IjYzZjAzOWRhMTUzNzZjMDA3ODE3YzNjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wR-pwUm2v3m8-5NpHKl3Wn_KmXEfRSkME6lhvafsF2k",
                "Content-Type":  "application/json;charset=utf-8'"
            },
        }).then(result => result.json()).then(data =>{
          setMovie(data)
        })    
  },[movieId])

  if(!movie){
    return null;
  }

    const imgUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path
    return(
        <div className={styles.detailsContainer}>
           <img src={imgUrl} alt={movie.title} className={`${styles.col} ${styles.Movieimg}`}/>
           <div className={`${styles.col} ${styles.MovieDetails}`}>
            <p className={styles.FirtsItem}>
              <strong>Title: </strong> {movie.title}
            </p>
            <p>
              <strong>Genres: </strong>  {movie.genres.map(genre =>
                    genre.name).join(", ")}
            </p>
            <p>
              <strong>Description: </strong> {movie.overview}
            </p>
           </div>
        </div>
    )
}

export default MovieDetails;