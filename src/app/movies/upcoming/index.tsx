'use client';
import Card from "@/src/components/Card";
import { Movie } from "@/src/type";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export function NavBarUpComing() {
    const router = useRouter();

    const emBreveClick = () =>  {
        router.back();
    }

    return (
        <nav className="navbar">
            <h1 className="page-title">Filmes</h1>
            <h2 className='subtitle'>
                <button className='upcoming' onClick={emBreveClick}>
                    Filmes Populares
                </button>
                    Filmes em Lançamentos
            </h2>
        </nav>
        
    )
}

export function MovieArrayUpcoming() {
    const [movies, setMovies] = useState<Movie[]>([]);
    

    useEffect(() => {
        getMoviesUpComing();
    }, []);

    const getMoviesUpComing = () => {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/movie/upcoming', //URl para pegar filmes populares da API
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