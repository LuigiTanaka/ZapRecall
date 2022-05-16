import React from 'react';
import logoPequeno from '../../assets/images/logo-pequeno.png';
import './style-container.css';
import Flashcards from '../Flashcards/Flashcards'
import BarraInferior from '../BarraInferior/BarraInferior';

function embaralhador() {
    return Math.random() - 0.5;
}

function criaIcones(icone, index) {
    if (icone === "close-circle") {
        return (
            <div className="errou">
                <ion-icon key={index} name={icone}></ion-icon>
            </div>
        )
    } else if (icone === "help-circle") {
        return (
            <div className="quase">
                <ion-icon key={index} name={icone}></ion-icon>
            </div>
        )
    } else {
        return (
            <div className="acertou">
                <ion-icon key={index} name={icone}></ion-icon>
            </div>
        )
    }
}

export default function Container() {

    const cards = [
        { type: "oculto", pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript", status: "" },
        { type: "oculto", pergunta: "O React é __", resposta: "uma biblioteca JavaScript para construção de interfaces", status: "" },
        { type: "oculto", pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula", status: "" },
        { type: "oculto", pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões", status: "" },
        { type: "oculto", pergunta: "O ReactDOM nos ajuda __", resposta: "interagindo com a DOM para colocar componentes React na mesma", status: "" },
        { type: "oculto", pergunta: "Usamos o npm para __", resposta: "gerenciar os pacotes necessários e suas dependências", status: "" },
        { type: "oculto", pergunta: "Usamos props para __", resposta: "passar diferentes informações para componentes ", status: "" },
        { type: "oculto", pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", status: "" }
    ]

    cards.sort(embaralhador);

    const [deck, setDeck] = React.useState(cards);
    const [numRespostas, setNumRespostas] = React.useState(0);
    const [icones, setIcones] = React.useState([]);
    const [mensagemFinal, setMensagemFinal] = React.useState({ classe: "escondido" });

    return (
        <>
            <div className='topo'>
                <img src={logoPequeno} alt='logo pequeno' />
                <h2>ZapRecall</h2>
            </div>

            <Flashcards deck={deck} setDeck={setDeck} numRespostas={numRespostas} setNumRespostas={setNumRespostas} mensagemFinal={mensagemFinal} setMensagemFinal={setMensagemFinal} icones={icones} setIcones={setIcones} />
            <BarraInferior>
                <div className={`mensagem-final ${mensagemFinal.classe}`}>
                    <div>
                        <img src={mensagemFinal.emoji} alt="sad" />
                        <h5>{mensagemFinal.titulo}</h5>
                    </div>
                    <p>
                        {mensagemFinal.texto}
                    </p>
                </div>
                <h3>{numRespostas}/{deck.length} CONCLUÍDOS</h3>
                <div className="icones">
                    {icones.map(criaIcones)}
                </div>
            </BarraInferior>
        </>
    )
}