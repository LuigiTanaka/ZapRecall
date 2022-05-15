import './style-button.css';

export default function Button( {color, text} ) {
    return (
        <div className={`button ${color}`}>
            <p>{text}</p>
        </div>
    )
}