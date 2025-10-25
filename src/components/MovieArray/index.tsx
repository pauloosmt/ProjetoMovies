'use client';

import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import { Movie } from '@/src/type';
import Card from '../Card';



export default function MovieArray() {
    const [movies, setMovies] = useState<Movie[]>([]);
    

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = () => {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/movie/popular', //URl para pegar filmes populares da API
            params: {
                api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
                language:'pt-BR'
            }
        }).then(response=> {
            setMovies(response.data.results);
        })
    }


 
    return(
        <ul className="movie-array">
            {movies.map((movie) => 
                <Card
                    key={movie.id}
                    movie={movie}
                />
            )}
            
        </ul>
    );
}