'use client';

import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';



export default function MovieArray() {
    const [movies, setMovies] = useState([]);
    

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = () => {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie', //URl para pegar filmes populares da API
            params: {
                api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
                language:'pt-BR'
            }
        }).then(response=> {
            setMovies(response.data.results);
        })
    }

 
    return(
        <ul className="movie-list">
            {movies.map((movie) => 
                <li className='movie-card'>
                    {movie.title}
                </li>
            )}
            
        </ul>
    );
}