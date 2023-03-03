import style from './MovieCard.module.css'
import { Link } from 'react-router-dom';

function MovieCard({movie}){
const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path

    return(
        <li className={style.movieCard}>
            <Link to={'/movies/' + movie.id}>
            <img className={style.movieImg} src={imgUrl} alt={movie.title} width="230px" height="345px"/>
            <div className="">{movie.title}</div>
            </Link>
        </li>
    );
}

export default MovieCard;