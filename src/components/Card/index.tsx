import { Movie } from "@/src/type"

import './index.scss';
import Stars from "../Starts";

export interface Movies {
    movie: Movie
}



export default function Card(props: Movies) {
    const movie = props.movie;
    return (
        <li className='card'>
            <div className="movie-poster">
                <img src= {`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                    alt={movie.title}
                />
            </div>

            <div className="movie-infos">
                <p className="movie-title">
                    {movie.title}
                </p>
                {movie.vote_average > 0 &&
                    <Stars
                        rating={movie.vote_average}
                    />
                }
                <div className="hidden-content">
                    {movie.overview && 
                        <p className="movie-description">
                        {movie.overview.length > 100
                            ?`${movie.overview.substring(0,100)}...` //Diminuindo o tamanho da descrição do filme
                            : movie.overview
                        }
                    </p>
                    }
                    <button className="btn-default"> Ver Mais </button>
                </div>
            </div>


        </li>
    )
}