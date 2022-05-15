import "./style-pergunta.css";
import setinha from '../../assets/images/setinha.png';

function abreResposta (index, deck, setDeck) {
    deck[index].type = "resposta";
    const newDeck = [...deck];
    setDeck(newDeck);
}

export default function Pergunta({index, text, deck, setDeck}) {
    return (
        <div className="pergunta">
            <p>{text}</p>
            <img src={setinha} alt='setinha' onClick={() => abreResposta(index, deck, setDeck)} />
        </div>
    )
}