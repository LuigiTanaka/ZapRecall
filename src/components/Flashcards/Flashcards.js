import React from 'react';
import './style-flashcards.css';
import Oculto from '../Oculto/Oculto';
import Pergunta from '../Pergunta/Pergunta';
import Resposta from '../Resposta/Resposta';

export default function Flashcards() {  
    const cards = [
        {type: "oculto", pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript", status: ""},
        {type: "oculto", pergunta: "O React é __", resposta: "uma biblioteca JavaScript para construção de interfaces", status: ""},
        {type: "oculto", pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula", status: ""},
        {type: "oculto", pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões", status: ""},
        {type: "oculto", pergunta: "O ReactDOM nos ajuda __", resposta: "interagindo com a DOM para colocar componentes React na mesma", status: ""},
        {type: "oculto", pergunta: "Usamos o npm para __", resposta: "gerenciar os pacotes necessários e suas dependências", status: ""},
        {type: "oculto", pergunta: "Usamos props para __", resposta: "passar diferentes informações para componentes ", status: ""},
        {type: "oculto", pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", status: ""}
    ] 

    const [deck, setDeck] = React.useState(cards);

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
                <Resposta key={index} index={index} text={card.resposta} deck={deck} setDeck={setDeck} />
            )
        }
    }

    return (
        <div className='flashcards'>
            {deck.map(CriarDeck)}
        </div>
    )
}