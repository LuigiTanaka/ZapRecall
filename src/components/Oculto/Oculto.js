import React from "react";
import "./style-oculto.css";

function abrePergunta(index, deck, setDeck) {
    deck[index].type = "pergunta";
    const newDeck = [...deck];
    setDeck(newDeck);
}

export default function Oculto({index, text, deck, setDeck, status}) {
    if (status.length === 0) {
        return (
            <div className="oculto" onClick={() => abrePergunta(index, deck, setDeck)}>
                <h4>{text}</h4>
                <ion-icon name="play-outline"></ion-icon>
            </div>
        )
    } else if (status === "vermelho") {
        return (
            <div className="respondido errou">
                <h4 className="risco">{text}</h4>
                <ion-icon name="close-circle"></ion-icon>
            </div>
        )
    } else if (status === "amarelo") {
        return (
            <div className="respondido quase">
                <h4 className="risco">{text}</h4>
                <ion-icon name="help-circle"></ion-icon>
            </div>
        )
    } else {
        return (
            <div className="respondido acertou">
                <h4 className="risco">{text}</h4>
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>
        )
    }
    
}