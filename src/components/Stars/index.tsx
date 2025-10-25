
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import './index.scss';

export interface Movies {
    rating: number
}

export default function Stars(props:Movies) {
    const numStars = Math.round(props.rating/2);

    const fullStar = [];
    const emptyStar = [];

    for(let i = 0; i < 5; i++) {
        if(i < numStars) {
            fullStar.push(i);
        } else {
            emptyStar.push(i);
        }
    }

    return(
        <div className="stars-rating">
            {fullStar.map(index =>
                <FaStar key={index}/>
            )}

            {emptyStar.map(index =>
                <FaRegStar key={index}/>
            )}
            
        </div>
    );
}