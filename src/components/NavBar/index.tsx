'use client';

import './index.scss';
import { useRouter } from 'next/navigation';


export default function NavBar() {
    const router = useRouter();

    const emBreveClick = () =>  {
        router.push(`/movies/upcoming`);
    }

    return (
        <nav className="navbar">
            <h1 className="page-title">Filmes</h1>
            <h2 className='subtitle'>
                <button className='upcoming' onClick={emBreveClick}>
                    Lançamentos
                </button>
                    Filmes Populares
            </h2>
        </nav>
        
    )
}