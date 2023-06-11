import '../styles/star.css';

const Star = ({ selected = 0, onClick = f => f }) => {
    return (
        <div className={(selected) ? 'star selected' : 'star'} onClick={onClick} ></div >
    );
}

export { Star };