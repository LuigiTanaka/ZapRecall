import React from 'react';
import './style-flashcards.css';
import Oculto from '../Oculto/Oculto';
import Pergunta from '../Pergunta/Pergunta';
import Resposta from '../Resposta/Resposta';

export default function Flashcards({deck, setDeck, numRespostas, setNumRespostas, mensagemFinal, setMensagemFinal, icones, setIcones}) {  
    function CriarDeck(card, index) {
        if (card.type === "oculto") {
            return (
                <Oculto key={index} index={index} text={`Pergunta ${index+1}`} deck={deck} setDeck={setDeck} status={card.status} />
            )
        } else if (card.type === "pergunta") {
            return (
                <Pergunta key={index} index={index} text={card.pergunta} deck={deck} setDeck={setDeck} />
            )
        } else {
            return (
                <Resposta key={index} index={index} text={card.resposta} deck={deck} setDeck={setDeck} numRespostas={numRespostas} setNumRespostas={setNumRespostas} setMensagemFinal={setMensagemFinal} icones={icones} setIcones={setIcones} />
            )
        }
    }

    return (
        <div className='flashcards'>
            {deck.map(CriarDeck)}
        </div>
    )
}