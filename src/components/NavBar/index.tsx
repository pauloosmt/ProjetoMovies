import './index.scss';

export default function NavBar() {
    return (
        <nav className="navbar">
            <h1 className="page-title">Filmes</h1>
            <h2 className='subtitle'>
                <button className='upcoming'>
                    EM BREVE
                </button>
                    Filmes Populares
            </h2>
        </nav>
        
    )
}