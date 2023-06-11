import { Color } from './Color.jsx';
import '../styles/colorList.css';

const ColorList = ({ colors = [], onRate, onRemove }) => {
    return (
        <div className="color-list">
            {
                (colors.length === 0)
                    ? <p className='no-color'>No Colors Listed. (Add a Color)</p>
                    : colors.map(color => (
                        <Color
                            key={color.id}
                            {...color}
                            onRate={(rating) => onRate(color.id, rating)}
                            onRemove={() => onRemove(color.id)} />
                    ))
            }
        </div>
    );
}

export { ColorList };