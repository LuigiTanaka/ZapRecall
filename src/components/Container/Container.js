import React from 'react';
import logoPequeno from '../../assets/images/logo-pequeno.png';
import './style-container.css';
import Flashcards from '../Flashcards/Flashcards'
import BarraInferior from '../BarraInferior/BarraInferior';
import red from "../../assets/images/red.jpeg"
import red2 from "../../assets/images/red2.jpeg"
import bege from "../../assets/images/bege.jpeg"
import bege2 from "../../assets/images/bege2.jpeg"
import blue from "../../assets/images/blue.jpeg"
import blue2 from "../../assets/images/blue2.jpeg"
import ciano from "../../assets/images/ciano.jpeg"
import ciano2 from "../../assets/images/ciano2.jpeg"
import green from "../../assets/images/green.jpeg"
import green2 from "../../assets/images/green2.jpeg"
import lightGreen from "../../assets/images/lightGreen.jpeg"
import lightGreen2 from "../../assets/images/lightGreen2.jpeg"
import grey from "../../assets/images/grey.jpeg"
import grey2 from "../../assets/images/grey2.jpeg"
import anotherGrey from "../../assets/images/anotherGrey.jpeg"
import anotherGrey2 from "../../assets/images/anotherGrey2.jpeg"
import yellow from "../../assets/images/yellow.jpeg"
import yellow2 from "../../assets/images/yellow2.jpeg"

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
        { type: "oculto", pergunta: red, resposta: red2, status: "" },
        { type: "oculto", pergunta: green, resposta: green2, status: "" },
        { type: "oculto", pergunta: yellow, resposta: yellow2, status: "" },
        { type: "oculto", pergunta: lightGreen, resposta: lightGreen2, status: "" },
        { type: "oculto", pergunta: grey, resposta: grey2, status: "" },
        { type: "oculto", pergunta: anotherGrey, resposta: anotherGrey2, status: "" },
        { type: "oculto", pergunta: blue, resposta: blue2, status: "" },
        { type: "oculto", pergunta: bege, resposta: bege2, status: "" },
        { type: "oculto", pergunta: ciano, resposta: ciano2, status: "" }
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
                <h2>Flashcards</h2>
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