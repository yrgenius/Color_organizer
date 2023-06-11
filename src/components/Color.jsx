import { StarRating } from './StarRating';
import '../styles/color.css';

const Color = ({ title, color, rating = 0, onRemove = f => f, onRate = f => f }) => {
    return (
        <section className="color-item">
            <h1>{title}</h1>
            <div className="color" style={{ backgroundColor: color }}></div>

            <StarRating starSelected={rating} onRate={onRate} />

            <button onClick={onRemove}>X</button>
        </section>
    );
}

export { Color };