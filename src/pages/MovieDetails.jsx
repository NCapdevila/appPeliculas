import movie from './movie.json'
import styles from './MovieDetails.module.css'

function MovieDetails(){
    const imgUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path
    return(
        <div className={styles.detailsContainer}>
           <img src={imgUrl} alt={movie.title} />
           <div>
            <p>
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