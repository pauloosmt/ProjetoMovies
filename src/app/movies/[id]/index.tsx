'use client';

import CardMovie from "@/src/components/PageMovies";
import { FullMovie, Movie } from "@/src/type";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import '@/src/components/PageMovies/index.scss';

interface detailMovie extends Movie {
    runtime: number;
    genres: { 
        id: number,
        name: string,
    }[];
}

export default function DetailMovie () {

   const { id } = useParams<{ id: string}>();
    const [movieDetails, setMovieDetails] = useState<FullMovie| null>(null);

    useEffect(() => {
        if(id) {
            axios({
                method:'get',
                url: `https://api.themoviedb.org/3/movie/${id}`,
                params: {
                    api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
                    language: 'pt-BR'
                }
            }).then(response => {
                setMovieDetails(response.data);
            })
        }
    }, [id]);

    if (!movieDetails) {
        return <div>Carregando detalhes...</div>;
    }

    return (
        <div>
            <CardMovie
                key={movieDetails.id}
                movie={movieDetails}
            />
        </div>
    );
}