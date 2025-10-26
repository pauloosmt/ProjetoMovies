import { FullMovie,} from "@/src/type";


export interface Movies {
    movie: FullMovie
}



export default function CardMovie(props: Movies) {
    const movie = props.movie;


    return (
        <div className="movie-detail-container">
                {/* Imagem de Fundo (Backdrop) */}
                <div 
                    className="backdrop-image" 
                    style={{ 
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` 
                    }}
                />
                
                
                <div className="content-wrapper">
                    
                    {/* Seção Esquerda: Pôster e Infos Rápidas */}
                    <div className="poster-section">
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                            alt={movie.title} 
                            className="detail-poster"
                        />
                        <div className="quick-info">
                            {/* Exemplo de infos extras */}
                            <p>Duração: {movie.runtime} min</p>
                        </div>
                    </div>
                    
                    {/* Seção Direita: Título, Sinopse e Gêneros */}
                    <div className="info-section">
                        <h1 className="movie-title-detail">{movie.title}</h1>
                        <p className="movie-tagline">{movie.tagline}</p>
                        
                        <div className="rating-genres">
                            <span className="rating-score">⭐️ {movie.vote_average.toFixed(1)}/10</span>
                            <span className="genres-list">
                                {movie.genres.map(g => g.name).join(' | ')}
                            </span>
                        </div>
                        
                        <h2>Sinopse</h2>
                        <p className="movie-overview">{movie.overview}</p>
                    </div>
                </div>
            </div>
    )
}