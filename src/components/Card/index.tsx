import { Movie } from "@/src/type"
import Stars from "../Stars";

export interface Movies {
    movie: Movie
}



export default function Card(props: Movies) {
    const movie = props.movie;
    return (
        <li className='card'>
            <div>
                <img src= {`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                    alt={movie.title}
                />
            </div>

            <div className="movie-infos">
                <p className="movie-title">
                    {movie.title}
                </p>

                <Stars 
                    rating={movie.vote_average}
                />

                <div className="hidden-content">
                    <p>
                        {movie.overview}
                    </p>
                </div>
            </div>


        </li>
    )
}