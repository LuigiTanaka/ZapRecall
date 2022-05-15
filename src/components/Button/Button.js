import './style-button.css';

export default function Button( {color, text, onClick} ) {
    return (
        <div className={`button ${color}`} onClick={onClick}>
            <p>{text}</p>
        </div>
    )
}