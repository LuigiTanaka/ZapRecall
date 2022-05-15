import Button from '../Button/Button';
import "./style-resposta.css";

function respondeVermelho(index, deck, setDeck) {
    deck[index].type = "oculto";
    deck[index].status = "vermelho";
    const newDeck = [...deck];
    setDeck(newDeck);
}

function respondeAmarelo(index, deck, setDeck) {
    deck[index].type = "oculto";
    deck[index].status = "amarelo";
    const newDeck = [...deck];
    setDeck(newDeck);
}

function respondeVerde(index, deck, setDeck) {
    deck[index].type = "oculto";
    deck[index].status = "verde";
    const newDeck = [...deck];
    setDeck(newDeck);
}

export default function Resposta({index, text, deck, setDeck}) {
    return (
        <div className="resposta">
            <p>{text}</p>
            <div>
                <Button color='vermelho' text='Não lembrei' onClick={() => respondeVermelho(index, deck, setDeck)} />
                <Button color='amarelo' text='Quase não lembrei' onClick={() => respondeAmarelo(index, deck, setDeck)} />
                <Button color='verde' text='Zap!' onClick={() => respondeVerde(index, deck, setDeck)} />
            </div>
        </div>
    )
}