import { Star } from './Star';
import '../styles/starRating.css';

const StarRating = ({ starSelected = 0, totalStars = 5, onRate = f => f }) => (
    <div className="star-rating">
        {
            [...Array(totalStars)].map((el, i) => <Star
                key={i}
                onClick={() => onRate(i + 1)}
                selected={i < starSelected} />)
        }
        <p>{starSelected} of {totalStars} stars</p>
    </div>
);

export { StarRating };