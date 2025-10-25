export interface Movie {
    id:number,
    title:string,
    poster_path:string,
    overview: string,
    vote_average: number,
}

export interface Genre {
    id: number;
    name: string;
}

export interface FullMovie extends Movie {
    runtime: number; 
    genres: Genre[]; 
    tagline: string;
    backdrop_path: string;
}